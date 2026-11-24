import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { confidenceSchema, type Confidence } from "./confidence.js";

export type Entity = {
  id?: string;
  name?: string;
  confidence?: Confidence;
  method?: string;
  reliedOn?: boolean;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitySchema: Schema<Entity> = s.object<Entity>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    confidence: s.optional(s.lazy(() => confidenceSchema)),
    method: s.optional(s.string()),
    reliedOn: s.optional(s.boolean()),
    url: s.optional(s.string()),
    _keysMap: {
      reliedOn: "relied_on",
    },
  },
  { additionalProperties: s.json() },
);
