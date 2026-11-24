import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageSyncTokensRequest = {
  /** What it is for, e.g. deploy or ci. Defaults to "Form sync". */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageSyncTokensRequestProperties: s.Shape<ApiV1ManageSyncTokensRequest> = {
  name: s.optional(s.string()),
};

export const apiV1ManageSyncTokensRequestInternalSchema: Schema<ApiV1ManageSyncTokensRequest> =
  s.object<ApiV1ManageSyncTokensRequest>(apiV1ManageSyncTokensRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageSyncTokensRequestSchema: Schema<ApiV1ManageSyncTokensRequest> = s.lazySchema(() =>
  s.object<ApiV1ManageSyncTokensRequest>(
    {
      ...apiV1ManageSyncTokensRequestProperties,
      name: s.optional(s.string().check(s.maxLength(80))),
    },
    { additionalProperties: s.json() },
  ),
);
