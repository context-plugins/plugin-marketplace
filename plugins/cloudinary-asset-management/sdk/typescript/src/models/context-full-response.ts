import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Contextual metadata grouped by kind. Custom user context appears under the 'custom' key. Other
 * context kinds may also appear as additional keys.
 */
export type ContextFullResponse = {
  /** User-defined contextual metadata as key-value pairs. */
  custom?: Record<string, string>;
};

export const contextFullResponseSchema: Schema<ContextFullResponse> = s.object<ContextFullResponse>({
  custom: s.optional(s.record(s.string(), s.string())),
});
