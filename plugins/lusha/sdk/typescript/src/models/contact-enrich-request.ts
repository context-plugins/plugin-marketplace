import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContactEnrichRequest = {
  /** The requestId generated in the Prospecting Search response (UUID) */
  requestId: string;
  /** An array containing the contact IDs for enrichment. Min 1, max 100. */
  contactIds: string[];
  /**
   * Set `revealEmails=true` to retrieve only the email address of the contact. Only available to
   * customers on the **Unified Credits** pricing plan.
   */
  revealEmails?: boolean;
  /**
   * Set `revealPhones=true` to retrieve only the phone number of the contact. Only available to
   * customers on the **Unified Credits** pricing plan.
   */
  revealPhones?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactEnrichRequestSchema: Schema<ContactEnrichRequest> = s.object<ContactEnrichRequest>(
  {
    requestId: s.string(),
    contactIds: s.array(s.string()),
    revealEmails: s.optional(s.boolean()),
    revealPhones: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
