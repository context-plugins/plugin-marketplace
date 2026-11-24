import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1DraftsRequest = {
  /** The complete HTML document. */
  html: string;
  title?: string;
  /** Which AI or tool produced it. */
  sourceTool?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1DraftsRequestProperties: s.Shape<ApiV1DraftsRequest> = {
  html: s.string(),
  title: s.optional(s.string()),
  sourceTool: s.optional(s.string()),
};

export const apiV1DraftsRequestInternalSchema: Schema<ApiV1DraftsRequest> = s.object<ApiV1DraftsRequest>(
  apiV1DraftsRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1DraftsRequestSchema: Schema<ApiV1DraftsRequest> = s.lazySchema(() =>
  s.object<ApiV1DraftsRequest>(
    {
      ...apiV1DraftsRequestProperties,
      title: s.optional(s.string().check(s.maxLength(300))),
      sourceTool: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
