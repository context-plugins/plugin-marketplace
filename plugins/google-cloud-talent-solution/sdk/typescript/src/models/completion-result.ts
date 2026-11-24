import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

/** Resource that represents completion results. */
export type CompletionResult = {
  /** The URI of the company image for COMPANY_NAME. */
  imageUri?: string;
  /** The completion topic. */
  type?: Type3;
  /** The suggestion for the query. */
  suggestion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const completionResultSchema: Schema<CompletionResult> = s.object<CompletionResult>(
  {
    imageUri: s.optional(s.string()),
    type: s.optional(s.lazy(() => type3Schema)),
    suggestion: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
