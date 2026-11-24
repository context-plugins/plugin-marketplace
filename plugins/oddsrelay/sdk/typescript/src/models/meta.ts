import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Meta = {
  feedType: string;
  count: number;
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaSchema: Schema<Meta> = s.object<Meta>(
  {
    feedType: s.string(),
    count: s.int(),
    version: s.string(),
    _keysMap: {
      feedType: "feed_type",
    },
  },
  { additionalProperties: s.json() },
);
