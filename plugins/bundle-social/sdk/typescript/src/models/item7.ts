import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item7 = {
  /** Location tag ID to pass as data.TIKTOK.locationId. */
  locationId: string;
  /** Location name to pass as data.TIKTOK.locationName. */
  name: string;
  /** Extra location details. Can be a country, a region, a city or a full street address. */
  address?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item7Schema: Schema<Item7> = s.object<Item7>(
  {
    locationId: s.string(),
    name: s.string(),
    address: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
