import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SeovalidatorRequest = {
  /** The URL of the web page to validate the SEO metrics of */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SeovalidatorRequestSchema: Schema<V1SeovalidatorRequest> = s.object<V1SeovalidatorRequest>(
  {
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
