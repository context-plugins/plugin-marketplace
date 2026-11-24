import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudflowV1Connections409Error1 = {
  type?: string;
  title?: string;
  status?: number;
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowV1Connections409Error1Schema: Schema<CloudflowV1Connections409Error1> =
  s.object<CloudflowV1Connections409Error1>(
    {
      type: s.optional(s.string()),
      title: s.optional(s.string()),
      status: s.optional(s.int()),
      code: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
