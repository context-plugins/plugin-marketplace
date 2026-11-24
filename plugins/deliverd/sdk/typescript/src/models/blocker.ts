import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Blocker = {
  kind: string;
  message: string;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const blockerSchema: Schema<Blocker> = s.object<Blocker>(
  {
    kind: s.string(),
    message: s.string(),
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
