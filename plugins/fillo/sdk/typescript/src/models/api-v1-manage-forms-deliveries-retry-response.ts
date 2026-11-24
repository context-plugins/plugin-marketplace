import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsDeliveriesRetryResponse = {
  retried: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsDeliveriesRetryResponseSchema: Schema<ApiV1ManageFormsDeliveriesRetryResponse> =
  s.object<ApiV1ManageFormsDeliveriesRetryResponse>(
    {
      retried: s.int(),
    },
    { additionalProperties: s.json() },
  );
