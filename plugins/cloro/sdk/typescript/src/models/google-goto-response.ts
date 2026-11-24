import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleGotoResponse = {
  /** The destination the redirect link points to */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googleGotoResponseProperties: s.Shape<GoogleGotoResponse> = {
  url: s.string(),
};

export const googleGotoResponseInternalSchema: Schema<GoogleGotoResponse> = s.object<GoogleGotoResponse>(
  googleGotoResponseProperties,
  { additionalProperties: s.json() },
);

export const googleGotoResponseSchema: Schema<GoogleGotoResponse> = s.lazySchema(() =>
  s.object<GoogleGotoResponse>(
    {
      ...googleGotoResponseProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
