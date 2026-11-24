import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UnavailableReason = string;

export const unavailableReasonSchema: Schema<UnavailableReason> = s.of<UnavailableReason>(
  s.union([s.string()]),
);
