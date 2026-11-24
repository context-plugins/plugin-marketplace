import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { versionSchema, type Version } from "./version.js";

export type ApiV1PoliciesResponse = {
  id: string;
  name: string;
  version: Version | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PoliciesResponseSchema: Schema<ApiV1PoliciesResponse> = s.object<ApiV1PoliciesResponse>(
  {
    id: s.string(),
    name: s.string(),
    version: s.nullable(s.lazy(() => versionSchema)),
  },
  { additionalProperties: s.json() },
);
