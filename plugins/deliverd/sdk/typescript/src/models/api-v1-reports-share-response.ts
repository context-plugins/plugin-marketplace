import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { grantedInternalSchema, grantedSchema, type Granted } from "./granted.js";

export type ApiV1ReportsShareResponse = {
  granted: Granted[];
  unresolvedPhrases: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsShareResponseProperties: s.Shape<ApiV1ReportsShareResponse> = {
  granted: s.array(s.lazy(() => grantedInternalSchema)),
  unresolvedPhrases: s.array(s.string()),
};

export const apiV1ReportsShareResponseInternalSchema: Schema<ApiV1ReportsShareResponse> =
  s.object<ApiV1ReportsShareResponse>(apiV1ReportsShareResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ReportsShareResponseSchema: Schema<ApiV1ReportsShareResponse> = s.lazySchema(() =>
  s.object<ApiV1ReportsShareResponse>(
    {
      ...apiV1ReportsShareResponseProperties,
      granted: s.array(s.lazy(() => grantedSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
