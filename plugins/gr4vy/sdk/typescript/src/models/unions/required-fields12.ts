import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RequiredFields12 = boolean | Record<string, unknown>;

export const requiredFields12Schema: Schema<RequiredFields12> = s.of<RequiredFields12>(
  s.union([s.boolean(), s.record(s.string(), s.unknown())]),
);
