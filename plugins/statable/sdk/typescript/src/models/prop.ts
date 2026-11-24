import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Prop = {
  key?: string;
  event?: string;
  count?: number;
  firstSeen?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const propSchema: Schema<Prop> = s.object<Prop>(
  {
    key: s.optional(s.string()),
    event: s.optional(s.string()),
    count: s.optional(s.int()),
    firstSeen: s.optional(s.dateTime()),
    _keysMap: {
      firstSeen: "first_seen",
    },
  },
  { additionalProperties: s.json() },
);
