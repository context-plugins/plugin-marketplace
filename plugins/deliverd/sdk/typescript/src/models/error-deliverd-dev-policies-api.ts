import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorDeliverdDevPoliciesApi = {
  /** @default "invalid_rules" */
  code?: "invalid_rules";
  message: string;
  /** One line per problem */
  details: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorDeliverdDevPoliciesApiSchema: Schema<ErrorDeliverdDevPoliciesApi> =
  s.object<ErrorDeliverdDevPoliciesApi>(
    {
      code: s.defaulted(s.literal("invalid_rules"), "invalid_rules"),
      message: s.string(),
      details: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
