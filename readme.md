# Proyecto de Autenticación Multifactor (MFA)

Este proyecto implementa un sistema de autenticación multifactor (MFA) utilizando autenticación por credenciales y biometría (huella digital). Está desarrollado en React Native utilizando Expo para dispositivos móviles.

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Características](#características)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación](#instalación)
5. [Estructura del Código](#estructura-del-código)
6. [Uso](#uso)
7. [Resultados](#resultados)
8. [Contribuciones](#contribuciones)
9. [Licencia](#licencia)

## Descripción

Este proyecto proporciona un sistema seguro de autenticación que combina la validación de credenciales (correo electrónico y contraseña) con la autenticación biométrica, como la huella digital. El objetivo es ofrecer una solución robusta para proteger el acceso de los usuarios a la aplicación.

## Características

- Autenticación por credenciales (correo y contraseña).
- Validación de formato para credenciales.
- Autenticación biométrica con huella digital (solo en dispositivos compatibles).
- Redirección a la página principal después de la autenticación exitosa.
- Manejo de errores y alertas en caso de fallos de autenticación.

## Tecnologías Utilizadas

- **React Native**: Framework para el desarrollo de aplicaciones móviles multiplataforma.
- **Expo**: Plataforma para el desarrollo y despliegue rápido de aplicaciones React Native.
- **LocalAuthentication (Expo)**: Módulo para acceder a la autenticación biométrica.
- **JavaScript**: Lenguaje de programación principal.

## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/proyecto-mfa.git

2. Navega al directorio del proyecto:

   ```bash
   cd Faunora

3. Instala las dependencias del proyecto:

   ```bash
   npm install

4. Inicia el proyecto con Expo:

   ```bash
   expo start

5. Para ejecutar la aplicación en un dispositivo Android o iOS, usa la aplicación Expo Go o un emulador:

   ```bash
   npm run android

## Uso

1. Al iniciar la aplicación, los usuarios son dirigidos a la pantalla de inicio de sesión donde deben ingresar su correo y contraseña.
2. Después de una validación exitosa, los usuarios serán redirigidos a la pantalla de autenticación biométrica.
3. Si la autenticación biométrica es exitosa, el usuario podrá acceder a la página principal.

## Resultados

- Seguridad Aumentada: La autenticación multifactor agrega una capa adicional de seguridad.
- Fácil de Usar: La autenticación biométrica facilita el acceso de los usuarios a la aplicación.
- Compatibilidad: Funciona en dispositivos con hardware biométrico compatible.