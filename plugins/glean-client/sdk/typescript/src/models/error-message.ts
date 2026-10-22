import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorMessage = {
  /** The datasource this message relates to. */
  source?: string;
  errorMessage?: string;
};

export const errorMessageSchema: Schema<ErrorMessage> = s.object<ErrorMessage>({
  source: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});
