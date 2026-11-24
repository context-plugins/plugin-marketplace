import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Federal = Record<string, unknown>;

export const federalSchema: Schema<Federal> = s.of<Federal>(s.union([s.record(s.string(), s.unknown())]));
