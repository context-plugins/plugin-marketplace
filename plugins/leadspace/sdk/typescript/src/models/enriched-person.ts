import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsSchema, type Analytics } from "./analytics.js";
import { enrichedAddressSchema, type EnrichedAddress } from "./enriched-address.js";
import { levelSchema, type Level } from "./level.js";
import {
  originalEmailVerificationStatusSchema,
  type OriginalEmailVerificationStatus,
} from "./original-email-verification-status.js";
import { verificationSourceSchema, type VerificationSource } from "./verification-source.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

export type EnrichedPerson = {
  /** Unique Leadspace person identifier */
  ugPersonId?: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  department?: string;
  level?: Level;
  email?: string;
  originalEmail?: string;
  originalEmailVerificationStatus?: OriginalEmailVerificationStatus;
  verificationStatus?: VerificationStatus;
  verificationSource?: VerificationSource;
  linkedinProfile?: string;
  phone?: string;
  isRetired?: string;
  address?: EnrichedAddress;
  analytics?: Analytics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrichedPersonSchema: Schema<EnrichedPerson> = s.object<EnrichedPerson>(
  {
    ugPersonId: s.optional(s.string()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    title: s.optional(s.string()),
    department: s.optional(s.string()),
    level: s.optional(s.lazy(() => levelSchema)),
    email: s.optional(s.string()),
    originalEmail: s.optional(s.string()),
    originalEmailVerificationStatus: s.optional(s.lazy(() => originalEmailVerificationStatusSchema)),
    verificationStatus: s.optional(s.lazy(() => verificationStatusSchema)),
    verificationSource: s.optional(s.lazy(() => verificationSourceSchema)),
    linkedinProfile: s.optional(s.string()),
    phone: s.optional(s.string()),
    isRetired: s.optional(s.string()),
    address: s.optional(s.lazy(() => enrichedAddressSchema)),
    analytics: s.optional(s.lazy(() => analyticsSchema)),
    _keysMap: {
      ugPersonId: "ug_person_id",
      firstName: "first_name",
      lastName: "last_name",
      originalEmail: "original_email",
      originalEmailVerificationStatus: "original_email_verification_status",
      verificationStatus: "verification_status",
      verificationSource: "verification_source",
      linkedinProfile: "linkedin_profile",
      isRetired: "is_retired",
    },
  },
  { additionalProperties: s.json() },
);
