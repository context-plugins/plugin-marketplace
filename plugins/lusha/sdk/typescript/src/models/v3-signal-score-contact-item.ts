import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Must contain id, linkedinUrl, email, or firstName + lastName + (companyName | companyDomain). */
export type V3SignalScoreContactItem = {
  clientReferenceId?: string;
  /** Encrypted Lusha contact ID (vN.…). */
  id?: string;
  linkedinUrl?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  companyDomain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3SignalScoreContactItemProperties: s.Shape<V3SignalScoreContactItem> = {
  clientReferenceId: s.optional(s.string()),
  id: s.optional(s.string()),
  linkedinUrl: s.optional(s.string()),
  email: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  companyName: s.optional(s.string()),
  companyDomain: s.optional(s.string()),
};

export const v3SignalScoreContactItemInternalSchema: Schema<V3SignalScoreContactItem> =
  s.object<V3SignalScoreContactItem>(v3SignalScoreContactItemProperties, { additionalProperties: s.json() });

export const v3SignalScoreContactItemSchema: Schema<V3SignalScoreContactItem> = s.lazySchema(() =>
  s.object<V3SignalScoreContactItem>(
    {
      ...v3SignalScoreContactItemProperties,
      clientReferenceId: s.optional(s.string().check(s.maxLength(256))),
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
