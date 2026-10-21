import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The active secret value. */
export type Secret = string;

export const secretSchema: Schema<Secret> = s.of<Secret>(s.union([s.string()]));
