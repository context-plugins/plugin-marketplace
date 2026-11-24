import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ListTagsForCertificateResponse = {
  /** The key-value pairs that define the applied tags. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForCertificateResponseSchema: Schema<ListTagsForCertificateResponse> =
  s.object<ListTagsForCertificateResponse>(
    {
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
