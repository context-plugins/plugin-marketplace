import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { geoAsnSchema, type GeoAsn } from "./geo-asn.js";
import { geoCompanySchema, type GeoCompany } from "./geo-company.js";

export type GeoNetwork = {
  asn?: GeoAsn;
  connectionType?: string;
  company?: GeoCompany;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geoNetworkSchema: Schema<GeoNetwork> = s.object<GeoNetwork>(
  {
    asn: s.optional(s.lazy(() => geoAsnSchema)),
    connectionType: s.optional(s.string()),
    company: s.optional(s.lazy(() => geoCompanySchema)),
    _keysMap: {
      connectionType: "connection_type",
    },
  },
  { additionalProperties: s.json() },
);
