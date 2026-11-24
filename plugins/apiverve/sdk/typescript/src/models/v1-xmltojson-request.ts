import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1XmltojsonRequest = {
  /** The XML content to convert to JSON */
  xml: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1XmltojsonRequestSchema: Schema<V1XmltojsonRequest> = s.object<V1XmltojsonRequest>(
  {
    xml: s.string(),
  },
  { additionalProperties: s.json() },
);
