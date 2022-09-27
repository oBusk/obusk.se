import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Text } from "./Text";

export const Composition = () => {
    return (
        <div style={{ flexGrow: 1, position: "relative" }}>
            <Canvas style={{ position: "absolute" }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Text>obusk.se</Text>
            </Canvas>
        </div>
    );
};

export const NoSSrCommposition = dynamic(async () => Composition, {
    ssr: false,
});
