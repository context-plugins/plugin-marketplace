import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Name = string;

export const nameSchema: Schema<Name> = s.of<Name>(s.union([s.string()]));
