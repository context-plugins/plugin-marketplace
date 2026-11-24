import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Must contain exactly one of id, domain, name, or email. */
export type V3SignalScoreCompanyItem = {
  /** Caller-supplied token echoed back on the matching result. */
  clientReferenceId?: string;
  /**
   * Encrypted Lusha company ID (vN.…). Legacy numeric IDs accepted during the transition window.
   */
  id?: string;
  domain?: string;
  name?: string;
  /**
   * Must be a valid email address; only the domain part is used for resolution. A malformed email
   * is rejected with 400.
   */
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3SignalScoreCompanyItemProperties: s.Shape<V3SignalScoreCompanyItem> = {
  clientReferenceId: s.optional(s.string()),
  id: s.optional(s.string()),
  domain: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
};

export const v3SignalScoreCompanyItemInternalSchema: Schema<V3SignalScoreCompanyItem> =
  s.object<V3SignalScoreCompanyItem>(v3SignalScoreCompanyItemProperties, { additionalProperties: s.json() });

export const v3SignalScoreCompanyItemSchema: Schema<V3SignalScoreCompanyItem> = s.lazySchema(() =>
  s.object<V3SignalScoreCompanyItem>(
    {
      ...v3SignalScoreCompanyItemProperties,
      clientReferenceId: s.optional(s.string().check(s.maxLength(256))),
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
