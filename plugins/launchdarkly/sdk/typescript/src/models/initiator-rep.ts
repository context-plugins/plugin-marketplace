import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InitiatorRep = {
  /** The name of the member who initiated the export */
  name?: string;
  /** The email address of the member who initiated the export */
  email?: string;
};

export const initiatorRepSchema: Schema<InitiatorRep> = s.object<InitiatorRep>({
  name: s.optional(s.string()),
  email: s.optional(s.string()),
});
