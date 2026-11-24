import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Extra = Record<string, unknown>;

export const extraSchema: Schema<Extra> = s.of<Extra>(s.union([s.record(s.string(), s.unknown())]));
