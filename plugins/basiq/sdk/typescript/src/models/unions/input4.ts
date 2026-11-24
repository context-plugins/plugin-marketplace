import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The input value being verified */
export type Input4 = string | Record<string, unknown>;

export const input4Schema: Schema<Input4> = s.of<Input4>(
  s.union([s.string(), s.record(s.string(), s.unknown())]),
);
