import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteSubscriptionErrorResult = {
  index: number;
  /** @default "False" */
  success?: "False";
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSubscriptionErrorResultSchema: Schema<DeleteSubscriptionErrorResult> =
  s.object<DeleteSubscriptionErrorResult>(
    {
      index: s.int(),
      success: s.defaulted(s.literal("False"), "False"),
      error: errorSchema,
    },
    { additionalProperties: s.json() },
  );
