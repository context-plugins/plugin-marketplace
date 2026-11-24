import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ErrorMessage = string;

export const errorMessageSchema: Schema<ErrorMessage> = s.of<ErrorMessage>(s.union([s.string()]));
