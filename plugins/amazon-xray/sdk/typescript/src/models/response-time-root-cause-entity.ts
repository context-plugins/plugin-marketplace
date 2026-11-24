import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResponseTimeRootCauseEntity = {
  /** The name of the entity. */
  name?: string;
  /** The type and messages of the exceptions. */
  coverage?: number;
  /** A flag that denotes a remote subsegment. */
  remote?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseTimeRootCauseEntitySchema: Schema<ResponseTimeRootCauseEntity> =
  s.object<ResponseTimeRootCauseEntity>(
    {
      name: s.optional(s.string()),
      coverage: s.optional(s.float64()),
      remote: s.optional(s.boolean()),
      _keysMap: {
        name: "Name",
        coverage: "Coverage",
        remote: "Remote",
      },
    },
    { additionalProperties: s.json() },
  );
