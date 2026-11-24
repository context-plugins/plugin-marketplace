import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RequestType = string;

export const requestTypeSchema: Schema<RequestType> = s.of<RequestType>(s.union([s.string()]));
