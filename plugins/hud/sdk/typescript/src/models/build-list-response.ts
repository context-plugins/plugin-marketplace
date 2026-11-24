import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildResponseInternalSchema, buildResponseSchema, type BuildResponse } from "./build-response.js";

export type BuildListResponse = {
  builds: BuildResponse[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buildListResponseProperties: s.Shape<BuildListResponse> = {
  builds: s.array(s.lazy(() => buildResponseInternalSchema)),
  total: s.int(),
};

export const buildListResponseInternalSchema: Schema<BuildListResponse> = s.object<BuildListResponse>(
  buildListResponseProperties,
  { additionalProperties: s.json() },
);

export const buildListResponseSchema: Schema<BuildListResponse> = s.lazySchema(() =>
  s.object<BuildListResponse>(
    {
      ...buildListResponseProperties,
      builds: s.array(s.lazy(() => buildResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
