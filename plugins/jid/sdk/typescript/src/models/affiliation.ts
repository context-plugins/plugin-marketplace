import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { evidenceSchema, type Evidence } from "./evidence.js";
import { status1Schema, type Status1 } from "./status1.js";

/**
 * Claims only: does the address's domain match the claimed business (same domain, a registry domain
 * of the business, or a link between the two websites)? A mismatch means manual review, never
 * rejection.
 */
export type Affiliation = {
  status?: Status1;
  emailDomain?: string | null;
  claimedDomain?: string | null;
  evidence?: Evidence[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const affiliationSchema: Schema<Affiliation> = s.object<Affiliation>(
  {
    status: s.optional(s.lazy(() => status1Schema)),
    emailDomain: s.optionalNullable(s.string()),
    claimedDomain: s.optionalNullable(s.string()),
    evidence: s.optional(s.array(s.lazy(() => evidenceSchema))),
    _keysMap: {
      emailDomain: "email_domain",
      claimedDomain: "claimed_domain",
    },
  },
  { additionalProperties: s.json() },
);
