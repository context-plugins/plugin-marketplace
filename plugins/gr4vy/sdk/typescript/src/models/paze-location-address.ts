import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { line22Schema, type Line22 } from "./unions/line22.js";
import { line3Schema, type Line3 } from "./unions/line3.js";
import { name3Schema, type Name3 } from "./unions/name3.js";

export type PazeLocationAddress = {
  /** Name of the organization or entity at the address. */
  name?: Name3;
  /** Line 1 of the address. */
  line1: string;
  /** Line 2 of the address. */
  line2?: Line22;
  /** Line 3 of the address. */
  line3?: Line3;
  /** City. */
  city: string;
  /** State or region. */
  state: string;
  /** Postal code. */
  zip: string;
  /** ISO 3166-1 alpha-2 country code. */
  countryCode: string;
};

export const pazeLocationAddressSchema: Schema<PazeLocationAddress> = s.object<PazeLocationAddress>({
  name: s.optional(s.lazy(() => name3Schema)),
  line1: s.string(),
  line2: s.optional(s.lazy(() => line22Schema)),
  line3: s.optional(s.lazy(() => line3Schema)),
  city: s.string(),
  state: s.string(),
  zip: s.string(),
  countryCode: s.string(),
});
