import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentType2Schema, type ContentType2 } from "./content-type2.js";

/** A list of content types. */
export type ContentTypeList2 = {
  /** Array of content type objects. */
  contentTypes?: ContentType2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentTypeList2Schema: Schema<ContentTypeList2> = s.object<ContentTypeList2>(
  {
    contentTypes: s.optional(s.array(s.lazy(() => contentType2Schema))),
    _keysMap: {
      contentTypes: "content_types",
    },
  },
  { additionalProperties: s.json() },
);
