import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LocationSearchRequest = {
  /** Search text for location */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationSearchRequestSchema: Schema<LocationSearchRequest> = s.object<LocationSearchRequest>(
  {
    text: s.string(),
  },
  { additionalProperties: s.json() },
);
