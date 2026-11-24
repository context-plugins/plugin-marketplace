import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Refusal = string;

export const refusalSchema: Schema<Refusal> = s.of<Refusal>(s.union([s.string()]));
