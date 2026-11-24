import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { geometry1Schema, type Geometry1 } from "./geometry1.js";

export type Location1 = {
  /** The street number of the merchant location. */
  routeNo?: string;
  /** The street name of the merchant location. */
  route?: string;
  /** The post code of the merchant location. */
  postalCode?: string;
  /** The suburb of the merchant location. */
  suburb?: string;
  /** The state of the merchant location. */
  state?: string;
  /** The country of the merchant location. */
  country?: string;
  /** The full address for the merchant location */
  formattedAddress?: string;
  /** Contains the lat and lng coordinates of the merchant location. */
  geometry?: Geometry1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const location1Schema: Schema<Location1> = s.object<Location1>(
  {
    routeNo: s.optional(s.string()),
    route: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    suburb: s.optional(s.string()),
    state: s.optional(s.string()),
    country: s.optional(s.string()),
    formattedAddress: s.optional(s.string()),
    geometry: s.optional(s.lazy(() => geometry1Schema)),
  },
  { additionalProperties: s.json() },
);
