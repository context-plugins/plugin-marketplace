import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Readonlyhint = boolean;

export const readonlyhintSchema: Schema<Readonlyhint> = s.of<Readonlyhint>(s.union([s.boolean()]));
