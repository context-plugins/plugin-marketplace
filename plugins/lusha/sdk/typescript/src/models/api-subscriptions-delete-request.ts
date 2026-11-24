import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiSubscriptionsDeleteRequest = {
  /** Array of subscription IDs to delete */
  ids: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiSubscriptionsDeleteRequestProperties: s.Shape<ApiSubscriptionsDeleteRequest> = {
  ids: s.array(s.string()),
};

export const apiSubscriptionsDeleteRequestInternalSchema: Schema<ApiSubscriptionsDeleteRequest> =
  s.object<ApiSubscriptionsDeleteRequest>(apiSubscriptionsDeleteRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiSubscriptionsDeleteRequestSchema: Schema<ApiSubscriptionsDeleteRequest> = s.lazySchema(() =>
  s.object<ApiSubscriptionsDeleteRequest>(
    {
      ...apiSubscriptionsDeleteRequestProperties,
      ids: s.array(s.string()).check(s.minLength(1), s.maxLength(25)),
    },
    { additionalProperties: s.json() },
  ),
);
