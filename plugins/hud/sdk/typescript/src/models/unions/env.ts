import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Env = Record<string, unknown>;

export const envSchema: Schema<Env> = s.of<Env>(s.union([s.record(s.string(), s.unknown())]));
