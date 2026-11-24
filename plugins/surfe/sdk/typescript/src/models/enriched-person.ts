import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailRecordInternalSchema, emailRecordSchema, type EmailRecord } from "./email-record.js";
import { jobHistoryEntrySchema, type JobHistoryEntry } from "./job-history-entry.js";
import { phoneRecordSchema, type PhoneRecord } from "./phone-record.js";

export type EnrichedPerson = {
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  seniorities?: string[];
  departments?: string[];
  companyName?: string;
  companyDomain?: string;
  country?: string;
  linkedInUrl?: string;
  externalId?: string;
  emails?: EmailRecord[];
  mobilePhones?: PhoneRecord[];
  jobHistory?: JobHistoryEntry[];
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const enrichedPersonProperties: s.Shape<EnrichedPerson> = {
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  jobTitle: s.optional(s.string()),
  seniorities: s.optional(s.array(s.string())),
  departments: s.optional(s.array(s.string())),
  companyName: s.optional(s.string()),
  companyDomain: s.optional(s.string()),
  country: s.optional(s.string()),
  linkedInUrl: s.optional(s.string()),
  externalId: s.optional(s.string()),
  emails: s.optional(s.array(s.lazy(() => emailRecordInternalSchema))),
  mobilePhones: s.optional(s.array(s.lazy(() => phoneRecordSchema))),
  jobHistory: s.optional(s.array(s.lazy(() => jobHistoryEntrySchema))),
  status: s.optional(s.string()),
  _keysMap: {
    externalId: "externalID",
  },
};

export const enrichedPersonInternalSchema: Schema<EnrichedPerson> = s.object<EnrichedPerson>(
  enrichedPersonProperties,
  { additionalProperties: s.json() },
);

export const enrichedPersonSchema: Schema<EnrichedPerson> = s.lazySchema(() =>
  s.object<EnrichedPerson>(
    {
      ...enrichedPersonProperties,
      emails: s.optional(s.array(s.lazy(() => emailRecordSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
