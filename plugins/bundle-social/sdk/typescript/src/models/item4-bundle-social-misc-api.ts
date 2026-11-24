import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { snippet6Schema, type Snippet6 } from "./snippet6.js";

export type Item4BundleSocialMiscApi = {
  kind?: string;
  etag?: string;
  id?: string;
  snippet?: Snippet6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item4BundleSocialMiscApiSchema: Schema<Item4BundleSocialMiscApi> =
  s.object<Item4BundleSocialMiscApi>(
    {
      kind: s.optional(s.string()),
      etag: s.optional(s.string()),
      id: s.optional(s.string()),
      snippet: s.optional(s.lazy(() => snippet6Schema)),
    },
    { additionalProperties: s.json() },
  );
