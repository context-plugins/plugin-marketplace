import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsCopyRequest = {
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsCopyRequestProperties: s.Shape<ApiV1ReportsCopyRequest> = {
  title: s.optional(s.string()),
};

export const apiV1ReportsCopyRequestInternalSchema: Schema<ApiV1ReportsCopyRequest> =
  s.object<ApiV1ReportsCopyRequest>(apiV1ReportsCopyRequestProperties, { additionalProperties: s.json() });

export const apiV1ReportsCopyRequestSchema: Schema<ApiV1ReportsCopyRequest> = s.lazySchema(() =>
  s.object<ApiV1ReportsCopyRequest>(
    {
      ...apiV1ReportsCopyRequestProperties,
      title: s.optional(s.string().check(s.minLength(1), s.maxLength(300))),
    },
    { additionalProperties: s.json() },
  ),
);
