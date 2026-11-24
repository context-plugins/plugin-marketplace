import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { snippet5Schema, type Snippet5 } from "./snippet5.js";

export type Item3BundleSocialMiscApi = {
  kind?: string;
  etag?: string;
  id?: string;
  snippet?: Snippet5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item3BundleSocialMiscApiSchema: Schema<Item3BundleSocialMiscApi> =
  s.object<Item3BundleSocialMiscApi>(
    {
      kind: s.optional(s.string()),
      etag: s.optional(s.string()),
      id: s.optional(s.string()),
      snippet: s.optional(s.lazy(() => snippet5Schema)),
    },
    { additionalProperties: s.json() },
  );
