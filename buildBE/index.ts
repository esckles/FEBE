import express from "express";
import cors from "cors";
import env from "dotenv";
env.config();

const port: number = parseInt(process.env.PORT as string);
