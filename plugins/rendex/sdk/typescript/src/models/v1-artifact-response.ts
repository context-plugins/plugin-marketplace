import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";

export type V1ArtifactResponse = {
  success?: boolean;
  data?: Data3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ArtifactResponseSchema: Schema<V1ArtifactResponse> = s.object<V1ArtifactResponse>(
  {
    success: s.optional(s.boolean()),
    data: s.optional(s.lazy(() => data3Schema)),
  },
  { additionalProperties: s.json() },
);
