import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The format of the NPI data that is serialized to the UI on the search page. */
export type NpiData4 = {
  npiNumber?: string;
  credentials?: string;
  licenseNumber?: string;
  specialization?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const npiData4Schema: Schema<NpiData4> = s.object<NpiData4>(
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
