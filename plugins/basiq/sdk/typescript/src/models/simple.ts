import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pafSchema, type Paf } from "./paf.js";

export type Simple = {
  /**
   * Name of the individual or business formatted for inclusion in an address used for physical
   * mail.
   */
  mailingName?: string;
  /** First line of the standard address object. */
  addressLine1: string;
  /** Second line of the standard address object. */
  addressLine2?: string;
  /** Third line of the standard address object. */
  addressLine3?: string;
  /** Mandatory for Australian addresses. */
  postcode?: string;
  /** Name of the city or locality. */
  city: string;
  /**
   * Free text if the country is not Australia. If country is Australia then must be one of the
   * values defined by the State Type Abbreviation in the PAF file format. NSW, QLD, VIC, NT, WA,
   * SA, TAS, ACT.
   */
  state: string;
  /**
   * A valid ISO 3166 Alpha-3 country code. Australia (AUS) is assumed if country is not present.
   */
  country?: string;
  /** Australian address formatted according to the file format defined by the PAF file format. */
  paf?: Paf;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const simpleSchema: Schema<Simple> = s.object<Simple>(
  {
    mailingName: s.optional(s.string()),
    addressLine1: s.string(),
    addressLine2: s.optional(s.string()),
    addressLine3: s.optional(s.string()),
    postcode: s.optional(s.string()),
    city: s.string(),
    state: s.string(),
    country: s.optional(s.string()),
    paf: s.optional(s.lazy(() => pafSchema)),
  },
  { additionalProperties: s.json() },
);
