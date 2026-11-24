import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { targetSchema, type Target } from "./target.js";

/** Target audience for the campaign */
export type Audience = {
  /** If true, sends to all eligible users */
  broadcast?: boolean;
  /** Specific targets to send to */
  targets?: Target[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audienceSchema: Schema<Audience> = s.object<Audience>(
  {
    broadcast: s.optional(s.boolean()),
    targets: s.optional(s.array(s.lazy(() => targetSchema))),
  },
  { additionalProperties: s.json() },
);
