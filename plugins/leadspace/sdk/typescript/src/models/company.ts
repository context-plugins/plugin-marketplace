import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enrichedAddressSchema, type EnrichedAddress } from "./enriched-address.js";
import { typeSchema, type Type } from "./type.js";

export type Company = {
  type?: Type;
  name?: string;
  lsId?: string;
  website?: string;
  phone?: string;
  sic?: string;
  naics?: string;
  address?: EnrichedAddress;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySchema: Schema<Company> = s.object<Company>(
  {
    type: s.optional(s.lazy(() => typeSchema)),
    name: s.optional(s.string()),
    lsId: s.optional(s.string()),
    website: s.optional(s.string()),
    phone: s.optional(s.string()),
    sic: s.optional(s.string()),
    naics: s.optional(s.string()),
    address: s.optional(s.lazy(() => enrichedAddressSchema)),
    _keysMap: {
      lsId: "ls_id",
    },
  },
  { additionalProperties: s.json() },
);
