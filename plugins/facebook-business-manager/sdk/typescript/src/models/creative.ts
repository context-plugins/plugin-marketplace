import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Creative = {
  /** The ID of the ad creative to use */
  creativeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creativeSchema: Schema<Creative> = s.object<Creative>(
  {
    creativeId: s.string(),
    _keysMap: {
      creativeId: "creative_id",
    },
  },
  { additionalProperties: s.json() },
);
