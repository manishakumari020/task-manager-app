const moongoose = require("mongoose");

const taskSchema = new moongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        priority: {
            type: String,
            enum: ['Low', 'Medium', 'High'],
            default: false
        },
        isCompletedTask: {
            type: Boolean,
            default: false
        },
        userId: {
            type: moongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        }
    },
    {
        timestamps: true,
    }
);

const Task = moongoose.model("Task", taskSchema);

module.exports = Task;