import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1RsstojsonRequest = {
  /** The URL of the RSS feed you want converted into JSON format */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1RsstojsonRequestSchema: Schema<V1RsstojsonRequest> = s.object<V1RsstojsonRequest>(
  {
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
