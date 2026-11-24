import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1UrlunshortenerRequest = {
  /** The shortened URL to unshorten */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1UrlunshortenerRequestSchema: Schema<V1UrlunshortenerRequest> =
  s.object<V1UrlunshortenerRequest>(
    {
      url: s.string(),
    },
    { additionalProperties: s.json() },
  );
