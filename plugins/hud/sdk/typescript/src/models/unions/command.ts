import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Command = string[];

export const commandSchema: Schema<Command> = s.of<Command>(s.union([s.array(s.string())]));
