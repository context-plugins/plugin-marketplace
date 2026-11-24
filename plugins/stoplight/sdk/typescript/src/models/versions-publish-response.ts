import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VersionsPublishResponse = {
  customDomain?: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const versionsPublishResponseSchema: Schema<VersionsPublishResponse> =
  s.object<VersionsPublishResponse>(
    {
      customDomain: s.optional(s.string()),
      url: s.string(),
    },
    { additionalProperties: s.json() },
  );
