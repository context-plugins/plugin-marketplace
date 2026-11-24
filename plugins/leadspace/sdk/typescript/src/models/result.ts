import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Result = {
  status?: string;
  externalId?: string;
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    status: s.optional(s.string()),
    externalId: s.optional(s.string()),
    data: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      externalId: "external_id",
    },
  },
  { additionalProperties: s.json() },
);
