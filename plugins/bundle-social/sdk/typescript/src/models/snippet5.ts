import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Snippet5 = {
  channelId?: string;
  title?: string;
  assignable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const snippet5Schema: Schema<Snippet5> = s.object<Snippet5>(
  {
    channelId: s.optional(s.string()),
    title: s.optional(s.string()),
    assignable: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
