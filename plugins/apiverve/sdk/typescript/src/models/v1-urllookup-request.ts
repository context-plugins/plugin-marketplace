import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1UrllookupRequest = {
  /** The URL to lookup the location of. Include the https protocol */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1UrllookupRequestSchema: Schema<V1UrllookupRequest> = s.object<V1UrllookupRequest>(
  {
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
