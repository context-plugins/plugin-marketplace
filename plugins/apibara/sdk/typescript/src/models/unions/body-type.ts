import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BodyType = string | string[];

export const bodyTypeSchema: Schema<BodyType> = s.of<BodyType>(s.union([s.string(), s.array(s.string())]));
