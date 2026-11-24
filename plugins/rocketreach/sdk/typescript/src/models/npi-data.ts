import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** List of NPI data objects for the profile */
export type NpiData = {
  npiNumber?: string;
  credentials?: string;
  licenseNumber?: string;
  specialization?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const npiDataSchema: Schema<NpiData> = s.object<NpiData>(
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
