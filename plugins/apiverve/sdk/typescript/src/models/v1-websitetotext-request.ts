import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1WebsitetotextRequest = {
  /** The URL of the website to convert to text */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WebsitetotextRequestSchema: Schema<V1WebsitetotextRequest> = s.object<V1WebsitetotextRequest>(
  {
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
