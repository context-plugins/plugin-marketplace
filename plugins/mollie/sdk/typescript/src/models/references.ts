import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Structured references provided with the unmatched credit transfer. */
export type References = {
  /** The creditor reference. */
  creditorReference?: string | null;
  /** The end-to-end identifier. */
  endToEndId?: string;
};

export const referencesSchema: Schema<References> = s.object<References>({
  creditorReference: s.optionalNullable(s.string()),
  endToEndId: s.optional(s.string()),
});
