import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidationInfosResponse = {
  indication?: string;
  subIndication?: string;
  details?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationInfosResponseSchema: Schema<ValidationInfosResponse> =
  s.object<ValidationInfosResponse>(
    {
      indication: s.optional(s.string()),
      subIndication: s.optional(s.string()),
      details: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
