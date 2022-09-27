import {
    extend,
    Object3DNode,
    ThreeElements,
    useFrame,
} from "@react-three/fiber";
import { forwardRef, useMemo, useRef } from "react";
import { Mesh } from "three";
import myFont from "three/examples/fonts/gentilis_bold.typeface.json";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

extend({ TextGeometry });

// Add types to ThreeElements elements so primitives pick up on it
declare module "@react-three/fiber" {
    interface ThreeElements {
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
    }
}

type Props = {
    children: string;
} & ThreeElements["mesh"];

export const Text = ({ children, ...props }: Props) => {
    const ref = useRef<Mesh>(null!);
    useFrame((state, delta) => (ref.current.rotation.x += 0.005));
    const font = useMemo(() => new FontLoader().parse(myFont), []);

    return (
        <mesh {...props} ref={ref}>
            <textGeometry args={[children, { font, size: 1, height: 0.3 }]} />
            <meshLambertMaterial attach="material" color="#478add" />
        </mesh>
    );
};
