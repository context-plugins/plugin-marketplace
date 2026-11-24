import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type LocationList = {
  data: Location[];
  /** Always `null`: not paginated. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationListSchema: Schema<LocationList> = s.object<LocationList>(
  {
    data: s.array(s.lazy(() => locationSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
