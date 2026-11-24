import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Meta = Record<string, unknown>;

export const metaSchema: Schema<Meta> = s.of<Meta>(s.union([s.record(s.string(), s.unknown())]));
