import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Region = {
  /** Region/state identifier */
  id: number;
  /** State or province name */
  name: string;
  /** State abbreviation */
  shortName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const regionSchema: Schema<Region> = s.object<Region>(
  {
    id: s.int(),
    name: s.string(),
    shortName: s.string(),
    _keysMap: {
      shortName: "short_name",
    },
  },
  { additionalProperties: s.json() },
);
