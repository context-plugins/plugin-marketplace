import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groupSchema, type Group } from "./group.js";
import { lookupSchema, type Lookup } from "./lookup.js";
import { severitySchema, type Severity } from "./severity.js";
import { statusSchema, type Status } from "./status.js";

/** One check from the registry. New checks add rows, never fields. */
export type Check = {
  /**
   * Stable id: registered, sanctions, threat_feeds, email_address, mail_domain, domain_age,
   * website, affiliation, adverse_records, licence, phone, location, enquiry, funding, complaints,
   * lookalike_domain, email_auth, history
   */
  id?: string;
  label?: string;
  group?: Group;
  status?: Status;
  /**
   * What a fail means: block = do not engage, warn = verify first, info = never changes the
   * recommendation
   */
  severity?: Severity;
  evidence?: string;
  lookup?: Lookup;
  phrase?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkSchema: Schema<Check> = s.object<Check>(
  {
    id: s.optional(s.string()),
    label: s.optional(s.string()),
    group: s.optional(s.lazy(() => groupSchema)),
    status: s.optional(s.lazy(() => statusSchema)),
    severity: s.optional(s.lazy(() => severitySchema)),
    evidence: s.optional(s.string()),
    lookup: s.optional(s.lazy(() => lookupSchema)),
    phrase: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
