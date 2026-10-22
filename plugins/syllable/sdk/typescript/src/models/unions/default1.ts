import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Default1 = Record<string, unknown>;

export const default1Schema: Schema<Default1> = s.of<Default1>(s.union([s.record(s.string(), s.unknown())]));
