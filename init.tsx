"use client"; // Asegura que el componente se trate como un componente de cliente

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/init.module.css'; // Asegúrate de que esta ruta sea correcta

const Init = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const offsetX = (clientX / innerWidth - 0.5) * 20; // Ajusta el valor para mayor o menor movimiento
            const offsetY = (clientY / innerHeight - 0.5) * 20; // Ajusta el valor para mayor o menor movimiento

            if (imageRef.current) {
                imageRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="init" id="init">
            <div className={styles.imageWrapper}>
                <Image 
                    src="/assets/img/initImg.jpg" 
                    alt="Initial Image" 
                    layout="fill" // Esto asegura que la imagen ocupe todo el espacio del contenedor
                    objectFit="contain" // Ajusta la imagen para cubrir el contenedor
                    className={styles.imgInit}
                    ref={imageRef} // Referencia movida directamente al componente Image
                />
            </div>
        </div>
    );
};

export default Init;
