import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CheckNumber = string | Record<string, unknown>;

export const checkNumberSchema: Schema<CheckNumber> = s.of<CheckNumber>(
  s.union([s.string(), s.record(s.string(), s.unknown())]),
);
