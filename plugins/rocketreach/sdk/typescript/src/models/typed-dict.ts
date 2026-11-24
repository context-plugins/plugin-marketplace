import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TypedDict = {
  /**
   * NPI number of the healthcare provider. An NPI is a unique 10-digit number used to identify
   * health care providers
   */
  npiNumber?: string;
  /**
   * Professional qualifications or designations earned by a healthcare provider, such as MD, DO,
   * NP, or RN.
   */
  credentials?: string;
  /**
   * A state-issued number that authorizes a healthcare provider to practice in a specific state or
   * field.
   */
  licenseNumber?: string;
  /**
   * The specific area of medicine or healthcare in which a provider focuses, such as cardiology,
   * pediatrics, or dermatology.
   */
  specialization?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const typedDictSchema: Schema<TypedDict> = s.object<TypedDict>(
  {
    npiNumber: s.optional(s.string()),
    credentials: s.optional(s.string()),
    licenseNumber: s.optional(s.string()),
    specialization: s.optional(s.string()),
    _keysMap: {
      npiNumber: "npi_number",
      licenseNumber: "license_number",
    },
  },
  { additionalProperties: s.json() },
);
