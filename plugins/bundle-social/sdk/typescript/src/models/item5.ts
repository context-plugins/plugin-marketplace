import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type Item5 = {
  /** Facebook Page ID to pass as data.INSTAGRAM.locationId */
  locationId: string;
  /** Location page name */
  name: string;
  /** Public Facebook Page link */
  link?: string | null;
  /** Physical location metadata */
  location?: Location | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item5Schema: Schema<Item5> = s.object<Item5>(
  {
    locationId: s.string(),
    name: s.string(),
    link: s.optionalNullable(s.string()),
    location: s.optionalNullable(s.lazy(() => locationSchema)),
  },
  { additionalProperties: s.json() },
);
