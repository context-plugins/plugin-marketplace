import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TitlecapitalizationRequest = {
  /** The text to convert to title case */
  text: string;
  /** The case to convert the text to */
  style: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TitlecapitalizationRequestSchema: Schema<V1TitlecapitalizationRequest> =
  s.object<V1TitlecapitalizationRequest>(
    {
      text: s.string(),
      style: s.string(),
    },
    { additionalProperties: s.json() },
  );
