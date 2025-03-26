// auth.js
class AuthService {
    constructor() {
        this.auth = firebase.auth();
    }

    // User Registration
    async register(email, password) {
        try {
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
            return userCredential.user;
        } catch (error) {
            console.error("Registration Error:", error);
            throw error;
        }
    }

    // User Login
    async login(email, password) {
        try {
            const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
            return userCredential.user;
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    }

    // Logout
    async logout() {
        try {
            await this.auth.signOut();
        } catch (error) {
            console.error("Logout Error:", error);
            throw error;
        }
    }

    // Get Current User
    getCurrentUser() {
        return this.auth.currentUser;
    }

    // Authentication State Listener
    onAuthStateChanged(callback) {
        this.auth.onAuthStateChanged(callback);
    }
}

// Create singleton instance
const authService = new AuthService();