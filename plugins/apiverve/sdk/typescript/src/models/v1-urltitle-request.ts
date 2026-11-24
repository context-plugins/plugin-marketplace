import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1UrltitleRequest = {
  /** The URL of the web page to get the title of */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1UrltitleRequestSchema: Schema<V1UrltitleRequest> = s.object<V1UrltitleRequest>(
  {
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
