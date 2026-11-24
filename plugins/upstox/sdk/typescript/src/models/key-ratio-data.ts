import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type KeyRatioData = {
  /** Name of the ratio */
  name?: string;
  /** Ratio value for the company */
  companyValue?: string;
  /** Ratio value for the sector reference */
  sectorValue?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keyRatioDataSchema: Schema<KeyRatioData> = s.object<KeyRatioData>(
  {
    name: s.optional(s.string()),
    companyValue: s.optional(s.string()),
    sectorValue: s.optional(s.string()),
    _keysMap: {
      companyValue: "company_value",
      sectorValue: "sector_value",
    },
  },
  { additionalProperties: s.json() },
);
