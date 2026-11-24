import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsCopyResponse = {
  id: string;
  title: string;
  slug: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsCopyResponseSchema: Schema<ApiV1ReportsCopyResponse> =
  s.object<ApiV1ReportsCopyResponse>(
    {
      id: s.string(),
      title: s.string(),
      slug: s.string(),
      url: s.string(),
    },
    { additionalProperties: s.json() },
  );
