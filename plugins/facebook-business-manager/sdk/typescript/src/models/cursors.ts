import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Cursors = {
  before?: string;
  after?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cursorsSchema: Schema<Cursors> = s.object<Cursors>(
  {
    before: s.optional(s.string()),
    after: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
