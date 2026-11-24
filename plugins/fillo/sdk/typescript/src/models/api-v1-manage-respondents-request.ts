import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageRespondentsRequest = {
  /** The respondent's exact external id. */
  confirm: string;
  /** Also erase every response they submitted, with its files. */
  alsoResponses?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageRespondentsRequestProperties: s.Shape<ApiV1ManageRespondentsRequest> = {
  confirm: s.string(),
  alsoResponses: s.optional(s.boolean()),
};

export const apiV1ManageRespondentsRequestInternalSchema: Schema<ApiV1ManageRespondentsRequest> =
  s.object<ApiV1ManageRespondentsRequest>(apiV1ManageRespondentsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageRespondentsRequestSchema: Schema<ApiV1ManageRespondentsRequest> = s.lazySchema(() =>
  s.object<ApiV1ManageRespondentsRequest>(
    {
      ...apiV1ManageRespondentsRequestProperties,
      confirm: s.string().check(s.minLength(1), s.maxLength(256)),
    },
    { additionalProperties: s.json() },
  ),
);
