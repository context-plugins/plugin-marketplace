import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetQueueAttributesResult = {
  /** A map of attributes to their respective values. */
  attributes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getQueueAttributesResultSchema: Schema<GetQueueAttributesResult> =
  s.object<GetQueueAttributesResult>(
    {
      attributes: s.optional(s.record(s.string(), s.string())),
      _keysMap: {
        attributes: "Attributes",
      },
    },
    { additionalProperties: s.json() },
  );
