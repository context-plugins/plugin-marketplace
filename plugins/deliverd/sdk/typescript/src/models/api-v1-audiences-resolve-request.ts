import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1AudiencesResolveRequest = {
  phrases: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AudiencesResolveRequestProperties: s.Shape<ApiV1AudiencesResolveRequest> = {
  phrases: s.array(s.string()),
};

export const apiV1AudiencesResolveRequestInternalSchema: Schema<ApiV1AudiencesResolveRequest> =
  s.object<ApiV1AudiencesResolveRequest>(apiV1AudiencesResolveRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AudiencesResolveRequestSchema: Schema<ApiV1AudiencesResolveRequest> = s.lazySchema(() =>
  s.object<ApiV1AudiencesResolveRequest>(
    {
      ...apiV1AudiencesResolveRequestProperties,
      phrases: s
        .array(s.string().check(s.minLength(1), s.maxLength(200)))
        .check(s.minLength(1), s.maxLength(20)),
    },
    { additionalProperties: s.json() },
  ),
);
