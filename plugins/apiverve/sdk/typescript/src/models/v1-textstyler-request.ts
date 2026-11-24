import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TextstylerRequest = {
  /** The text to style */
  text: string;
  /** The style to apply */
  style: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TextstylerRequestSchema: Schema<V1TextstylerRequest> = s.object<V1TextstylerRequest>(
  {
    text: s.string(),
    style: s.string(),
  },
  { additionalProperties: s.json() },
);
