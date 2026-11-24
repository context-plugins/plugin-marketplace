import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Organisation data. */
export type Organisation = {
  /** Agent first name. */
  agentFirstName?: string;
  /** Agent last name. */
  agentLastName?: string;
  /** Agent role. */
  agentRole?: string;
  /** Business name. */
  businessName?: string;
  /** Legal name. */
  legalName?: string;
  /** Short name. */
  shortName?: string;
  /** Australian Business Number. */
  abn?: string;
  /** Australian Company Number. */
  acn?: string;
  /** Indicates whether is Australian Company Number registered. */
  isAcncRegistered?: boolean;
  /** Industry Code. */
  industryCode?: string;
  /** Industry Code Version. */
  industryCodeVersion?: string;
  /** Organisation Type. */
  organisationType?: string;
  /** Registered Country. */
  registeredCountry?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organisationSchema: Schema<Organisation> = s.object<Organisation>(
  {
    agentFirstName: s.optional(s.string()),
    agentLastName: s.optional(s.string()),
    agentRole: s.optional(s.string()),
    businessName: s.optional(s.string()),
    legalName: s.optional(s.string()),
    shortName: s.optional(s.string()),
    abn: s.optional(s.string()),
    acn: s.optional(s.string()),
    isAcncRegistered: s.optional(s.boolean()),
    industryCode: s.optional(s.string()),
    industryCodeVersion: s.optional(s.string()),
    organisationType: s.optional(s.string()),
    registeredCountry: s.optional(s.string()),
    _keysMap: {
      isAcncRegistered: "isACNCRegistered",
    },
  },
  { additionalProperties: s.json() },
);
