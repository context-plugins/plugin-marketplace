import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UniversalCreditPersonLookupInput = {
  /** RocketReach internal unique profile ID */
  id?: number;
  /** Name of the desired profile. Must specify along with `current_employer` */
  name?: string;
  /** Current employer of the desired profile. Must specify along with `name` */
  currentEmployer?: string;
  /** Job title of the desired profile */
  title?: string;
  /**
   * linkedin_ext_url deprecated, please use `linkedin_url`
   *
   * @deprecated
   */
  linkedinExtUrl?: string;
  /** LinkedIn URL of the desired profile */
  linkedinUrl?: string;
  /** An email address for the desired profile */
  email?: string;
  /**
   * A phone number for the desired profile in either E.164 format or international format.
   * - Example: `+15555555555`
   */
  phone?: string;
  /** An NPI number for the desired profile (US healthcare professional) */
  npiNumber?: number;
  /** Whether to reveal the phone enrichment data for the desired profile @default false */
  revealPhone?: boolean;
  /**
   * Whether to reveal the professional email enrichment data for the desired profile
   *
   * @default false
   */
  revealProfessionalEmail?: boolean;
  /** Whether to reveal the personal email enrichment data for the desired profile @default false */
  revealPersonalEmail?: boolean;
  /**
   * Whether to reveal the detailed person enrichment data for the desired profile
   *
   * @default false
   */
  revealDetailedPersonEnrichment?: boolean;
  /** Whether to reveal the healthcare enrichment data for the desired profile @default false */
  revealHealthcareEnrichment?: boolean;
  /** User metadata about the profile, such as external ids, tags, notes, etc. */
  metadata?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const universalCreditPersonLookupInputProperties: s.Shape<UniversalCreditPersonLookupInput> = {
  id: s.optional(s.int()),
  name: s.optional(s.string()),
  currentEmployer: s.optional(s.string()),
  title: s.optional(s.string()),
  linkedinExtUrl: s.optional(s.string()),
  linkedinUrl: s.optional(s.string()),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  npiNumber: s.optional(s.int()),
  revealPhone: s.defaulted(s.boolean(), false),
  revealProfessionalEmail: s.defaulted(s.boolean(), false),
  revealPersonalEmail: s.defaulted(s.boolean(), false),
  revealDetailedPersonEnrichment: s.defaulted(s.boolean(), false),
  revealHealthcareEnrichment: s.defaulted(s.boolean(), false),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    currentEmployer: "current_employer",
    linkedinExtUrl: "linkedin_ext_url",
    linkedinUrl: "linkedin_url",
    npiNumber: "npi_number",
    revealPhone: "reveal_phone",
    revealProfessionalEmail: "reveal_professional_email",
    revealPersonalEmail: "reveal_personal_email",
    revealDetailedPersonEnrichment: "reveal_detailed_person_enrichment",
    revealHealthcareEnrichment: "reveal_healthcare_enrichment",
  },
};

export const universalCreditPersonLookupInputInternalSchema: Schema<UniversalCreditPersonLookupInput> =
  s.object<UniversalCreditPersonLookupInput>(universalCreditPersonLookupInputProperties, {
    additionalProperties: s.json(),
  });

export const universalCreditPersonLookupInputSchema: Schema<UniversalCreditPersonLookupInput> = s.lazySchema(
  () =>
    s.object<UniversalCreditPersonLookupInput>(
      {
        ...universalCreditPersonLookupInputProperties,
        email: s.optional(s.string().check(s.email())),
      },
      { additionalProperties: s.json() },
    ),
);
