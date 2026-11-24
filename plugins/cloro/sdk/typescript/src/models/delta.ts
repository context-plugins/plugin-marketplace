import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentSchema, type Content } from "./content.js";

/** Streaming delta payload from ChatGPT */
export type Delta = {
  content?: Content[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deltaSchema: Schema<Delta> = s.object<Delta>(
  {
    content: s.optional(s.array(s.lazy(() => contentSchema))),
  },
  { additionalProperties: s.json() },
);
