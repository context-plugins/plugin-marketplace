import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";

export type V1RecallsBatchSubmitResponse = {
  success?: boolean;
  data?: Data1;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1RecallsBatchSubmitResponseSchema: Schema<V1RecallsBatchSubmitResponse> =
  s.object<V1RecallsBatchSubmitResponse>(
    {
      success: s.optional(s.boolean()),
      data: s.optional(s.lazy(() => data1Schema)),
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
