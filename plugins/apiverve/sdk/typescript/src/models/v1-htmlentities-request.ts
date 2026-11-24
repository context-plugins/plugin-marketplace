import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1HtmlentitiesRequest = {
  /** The HTML content to encode */
  html: string;
  /** The action to perform */
  action?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1HtmlentitiesRequestSchema: Schema<V1HtmlentitiesRequest> = s.object<V1HtmlentitiesRequest>(
  {
    html: s.string(),
    action: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
