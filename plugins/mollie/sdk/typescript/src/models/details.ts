import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Additional details about the action. */
export type Details = {
  /** The IDs of the payments matched to the unmatched credit transfer. */
  paymentIds?: string[];
};

export const detailsSchema: Schema<Details> = s.object<Details>({
  paymentIds: s.optional(s.array(s.string())),
});
