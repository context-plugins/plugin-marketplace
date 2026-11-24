import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentTypeSchema, type ContentType } from "./content-type.js";

/** A paginated list of content types in the stack. */
export type ContentTypeList = {
  /** Array of content type objects. */
  contentTypes?: ContentType[];
  /** Total count of content types when include_count is true. */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentTypeListSchema: Schema<ContentTypeList> = s.object<ContentTypeList>(
  {
    contentTypes: s.optional(s.array(s.lazy(() => contentTypeSchema))),
    count: s.optional(s.int()),
    _keysMap: {
      contentTypes: "content_types",
    },
  },
  { additionalProperties: s.json() },
);
