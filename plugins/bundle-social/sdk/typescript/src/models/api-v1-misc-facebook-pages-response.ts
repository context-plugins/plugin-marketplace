import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item6Schema, type Item6 } from "./item6.js";

export type ApiV1MiscFacebookPagesResponse = {
  items: Item6[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscFacebookPagesResponseSchema: Schema<ApiV1MiscFacebookPagesResponse> =
  s.object<ApiV1MiscFacebookPagesResponse>(
    {
      items: s.array(s.lazy(() => item6Schema)),
    },
    { additionalProperties: s.json() },
  );
