import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Operator-set deprecation notice shown in the UI and returned on rejected requests. */
export type DeprecationMessage = string;

export const deprecationMessageSchema: Schema<DeprecationMessage> = s.of<DeprecationMessage>(
  s.union([s.string()]),
);
