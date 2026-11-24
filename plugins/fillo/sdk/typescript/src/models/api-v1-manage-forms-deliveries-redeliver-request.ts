import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsDeliveriesRedeliverRequest = {
  responseIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageFormsDeliveriesRedeliverRequestProperties: s.Shape<ApiV1ManageFormsDeliveriesRedeliverRequest> =
  {
    responseIds: s.array(s.string()),
  };

export const apiV1ManageFormsDeliveriesRedeliverRequestInternalSchema: Schema<ApiV1ManageFormsDeliveriesRedeliverRequest> =
  s.object<ApiV1ManageFormsDeliveriesRedeliverRequest>(apiV1ManageFormsDeliveriesRedeliverRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageFormsDeliveriesRedeliverRequestSchema: Schema<ApiV1ManageFormsDeliveriesRedeliverRequest> =
  s.lazySchema(() =>
    s.object<ApiV1ManageFormsDeliveriesRedeliverRequest>(
      {
        ...apiV1ManageFormsDeliveriesRedeliverRequestProperties,
        responseIds: s
          .array(s.string().check(s.minLength(1), s.maxLength(128)))
          .check(s.minLength(1), s.maxLength(200)),
      },
      { additionalProperties: s.json() },
    ),
  );
