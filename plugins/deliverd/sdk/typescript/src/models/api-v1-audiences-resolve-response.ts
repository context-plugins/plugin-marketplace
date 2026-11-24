import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ambiguouSchema, type Ambiguou } from "./ambiguou.js";
import { resolvedInternalSchema, resolvedSchema, type Resolved } from "./resolved.js";
import { unresolvedSchema, type Unresolved } from "./unresolved.js";

export type ApiV1AudiencesResolveResponse = {
  resolved: Resolved[];
  ambiguous: Ambiguou[];
  unresolved: Unresolved[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AudiencesResolveResponseProperties: s.Shape<ApiV1AudiencesResolveResponse> = {
  resolved: s.array(s.lazy(() => resolvedInternalSchema)),
  ambiguous: s.array(s.lazy(() => ambiguouSchema)),
  unresolved: s.array(s.lazy(() => unresolvedSchema)),
};

export const apiV1AudiencesResolveResponseInternalSchema: Schema<ApiV1AudiencesResolveResponse> =
  s.object<ApiV1AudiencesResolveResponse>(apiV1AudiencesResolveResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AudiencesResolveResponseSchema: Schema<ApiV1AudiencesResolveResponse> = s.lazySchema(() =>
  s.object<ApiV1AudiencesResolveResponse>(
    {
      ...apiV1AudiencesResolveResponseProperties,
      resolved: s.array(s.lazy(() => resolvedSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
