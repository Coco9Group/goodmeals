import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        province: { type: String, required: true },
        postalCode: { type: String, required: true },
        phone: { type: String, required: true }
    }
);
const User = mongoose.model('User', userSchema);
export default User;