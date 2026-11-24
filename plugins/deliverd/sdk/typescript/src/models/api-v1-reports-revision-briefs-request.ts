import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsRevisionBriefsRequest = {
  threadIds?: string[];
  instructions?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsRevisionBriefsRequestProperties: s.Shape<ApiV1ReportsRevisionBriefsRequest> = {
  threadIds: s.optional(s.array(s.string())),
  instructions: s.optional(s.string()),
};

export const apiV1ReportsRevisionBriefsRequestInternalSchema: Schema<ApiV1ReportsRevisionBriefsRequest> =
  s.object<ApiV1ReportsRevisionBriefsRequest>(apiV1ReportsRevisionBriefsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ReportsRevisionBriefsRequestSchema: Schema<ApiV1ReportsRevisionBriefsRequest> =
  s.lazySchema(() =>
    s.object<ApiV1ReportsRevisionBriefsRequest>(
      {
        ...apiV1ReportsRevisionBriefsRequestProperties,
        threadIds: s.optional(s.array(s.string()).check(s.maxLength(200))),
        instructions: s.optional(s.string().check(s.maxLength(4000))),
      },
      { additionalProperties: s.json() },
    ),
  );
