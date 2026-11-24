import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SpecData = Record<string, unknown> | string;

export const specDataSchema: Schema<SpecData> = s.of<SpecData>(
  s.union([s.record(s.string(), s.unknown()), s.string()]),
);
