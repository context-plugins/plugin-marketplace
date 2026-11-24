import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Exactly one of responseIds or all. */
export type ApiV1ManageFormsResponsesReleaseRequest = {
  responseIds?: string[];
  all?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageFormsResponsesReleaseRequestProperties: s.Shape<ApiV1ManageFormsResponsesReleaseRequest> = {
  responseIds: s.optional(s.array(s.string())),
  all: s.optional(s.boolean()),
};

export const apiV1ManageFormsResponsesReleaseRequestInternalSchema: Schema<ApiV1ManageFormsResponsesReleaseRequest> =
  s.object<ApiV1ManageFormsResponsesReleaseRequest>(apiV1ManageFormsResponsesReleaseRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageFormsResponsesReleaseRequestSchema: Schema<ApiV1ManageFormsResponsesReleaseRequest> =
  s.lazySchema(() =>
    s.object<ApiV1ManageFormsResponsesReleaseRequest>(
      {
        ...apiV1ManageFormsResponsesReleaseRequestProperties,
        responseIds: s.optional(
          s.array(s.string().check(s.minLength(1), s.maxLength(128))).check(s.maxLength(200)),
        ),
      },
      { additionalProperties: s.json() },
    ),
  );
