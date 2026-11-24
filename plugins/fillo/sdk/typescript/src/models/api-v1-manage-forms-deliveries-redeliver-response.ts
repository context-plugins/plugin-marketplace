import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsDeliveriesRedeliverResponse = {
  redelivered: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsDeliveriesRedeliverResponseSchema: Schema<ApiV1ManageFormsDeliveriesRedeliverResponse> =
  s.object<ApiV1ManageFormsDeliveriesRedeliverResponse>(
    {
      redelivered: s.int(),
    },
    { additionalProperties: s.json() },
  );
