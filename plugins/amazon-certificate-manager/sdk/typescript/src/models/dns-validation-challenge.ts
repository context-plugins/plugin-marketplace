import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceRecordSchema, type ResourceRecord } from "./resource-record.js";

export type DnsValidationChallenge = {
  resourceRecord?: ResourceRecord;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dnsValidationChallengeSchema: Schema<DnsValidationChallenge> = s.object<DnsValidationChallenge>(
  {
    resourceRecord: s.optional(s.lazy(() => resourceRecordSchema)),
    _keysMap: {
      resourceRecord: "ResourceRecord",
    },
  },
  { additionalProperties: s.json() },
);
