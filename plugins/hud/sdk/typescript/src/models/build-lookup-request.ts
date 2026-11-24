import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuildLookupRequest = {
  contentDigests: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buildLookupRequestProperties: s.Shape<BuildLookupRequest> = {
  contentDigests: s.array(s.string()),
  _keysMap: {
    contentDigests: "content_digests",
  },
};

export const buildLookupRequestInternalSchema: Schema<BuildLookupRequest> = s.object<BuildLookupRequest>(
  buildLookupRequestProperties,
  { additionalProperties: s.json() },
);

export const buildLookupRequestSchema: Schema<BuildLookupRequest> = s.lazySchema(() =>
  s.object<BuildLookupRequest>(
    {
      ...buildLookupRequestProperties,
      contentDigests: s
        .array(s.string().check(s.pattern("^sha256:[0-9a-f]{64}$")))
        .check(s.minLength(1), s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
