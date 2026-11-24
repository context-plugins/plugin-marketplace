import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Args = Record<string, unknown>;

export const argsSchema: Schema<Args> = s.of<Args>(s.union([s.record(s.string(), s.unknown())]));
