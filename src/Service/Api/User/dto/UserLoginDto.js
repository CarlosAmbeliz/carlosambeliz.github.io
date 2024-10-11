export class UserLoginDto {
    constructor({ nombre = '', password = '' } = {}) {
        this.nombre = nombre.trim();
        this.password = password;
    }

    Validate() {
        // Expresión regular para validar el nombre (no vacío)
        const nombreRegex = /^[a-zA-Z]+$/; // Solo letras

        // Expresión regular para validar la contraseña (al menos 6 caracteres, al menos una letra y un número)
        const passwordRegex = /^.{6,}$/;

        // Lanzar excepción si alguna validación falla
        if (!nombreRegex.test(this.nombre) || !passwordRegex.test(this.password)) {
            throw new Error("Nombre o contraseña inválidos.");
        }
    }
}