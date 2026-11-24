import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsDuplicateRequest = {
  /** Defaults to "<source name> (copy)". */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageFormsDuplicateRequestProperties: s.Shape<ApiV1ManageFormsDuplicateRequest> = {
  name: s.optional(s.string()),
};

export const apiV1ManageFormsDuplicateRequestInternalSchema: Schema<ApiV1ManageFormsDuplicateRequest> =
  s.object<ApiV1ManageFormsDuplicateRequest>(apiV1ManageFormsDuplicateRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageFormsDuplicateRequestSchema: Schema<ApiV1ManageFormsDuplicateRequest> = s.lazySchema(
  () =>
    s.object<ApiV1ManageFormsDuplicateRequest>(
      {
        ...apiV1ManageFormsDuplicateRequestProperties,
        name: s.optional(s.string().check(s.minLength(1), s.maxLength(120))),
      },
      { additionalProperties: s.json() },
    ),
);
