import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildLookupMatchSchema, type BuildLookupMatch } from "./build-lookup-match.js";

/** Builds with the requested digests in environments the caller can view, newest first. */
export type BuildLookupResponse = {
  builds: BuildLookupMatch[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildLookupResponseSchema: Schema<BuildLookupResponse> = s.object<BuildLookupResponse>(
  {
    builds: s.array(s.lazy(() => buildLookupMatchSchema)),
  },
  { additionalProperties: s.json() },
);
