import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntityJidScreenApi = {
  id?: string;
  name?: string;
  url?: string;
  matchConfidence?: string;
  reliedOn?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityJidScreenApiSchema: Schema<EntityJidScreenApi> = s.object<EntityJidScreenApi>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    url: s.optional(s.string()),
    matchConfidence: s.optional(s.string()),
    reliedOn: s.optional(s.boolean()),
    _keysMap: {
      matchConfidence: "match_confidence",
      reliedOn: "relied_on",
    },
  },
  { additionalProperties: s.json() },
);
