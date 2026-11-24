import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsArchiveRequest = {
  /** false to unarchive; defaults to true */
  archived?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsArchiveRequestSchema: Schema<ApiV1ReportsArchiveRequest> =
  s.object<ApiV1ReportsArchiveRequest>(
    {
      archived: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
