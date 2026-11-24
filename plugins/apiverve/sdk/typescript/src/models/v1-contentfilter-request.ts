import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ContentfilterRequest = {
  /** The URL or domain to check */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ContentfilterRequestSchema: Schema<V1ContentfilterRequest> = s.object<V1ContentfilterRequest>(
  {
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
