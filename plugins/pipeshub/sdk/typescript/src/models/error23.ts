import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata4Schema, type Metadata4 } from "./metadata4.js";

export type Error23 = {
  /** @default "VALIDATION_ERROR" */
  code?: "VALIDATION_ERROR";
  message: string;
  /** Per-field validation detail from Zod. */
  metadata: Metadata4;
};

export const error23Schema: Schema<Error23> = s.object<Error23>({
  code: s.defaulted(s.literal("VALIDATION_ERROR"), "VALIDATION_ERROR"),
  message: s.string(),
  metadata: metadata4Schema,
});
