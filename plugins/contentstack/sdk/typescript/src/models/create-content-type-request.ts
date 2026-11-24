import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentType1Schema, type ContentType1 } from "./content-type1.js";

/** Parameters for creating or updating a content type. */
export type CreateContentTypeRequest = {
  contentType: ContentType1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createContentTypeRequestSchema: Schema<CreateContentTypeRequest> =
  s.object<CreateContentTypeRequest>(
    {
      contentType: contentType1Schema,
      _keysMap: {
        contentType: "content_type",
      },
    },
    { additionalProperties: s.json() },
  );
