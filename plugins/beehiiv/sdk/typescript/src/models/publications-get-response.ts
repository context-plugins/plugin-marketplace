import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicationSchema, type Publication } from "./publication.js";

export type PublicationsGetResponse = {
  data: Publication;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsGetResponseSchema: Schema<PublicationsGetResponse> =
  s.object<PublicationsGetResponse>(
    {
      data: publicationSchema,
    },
    { additionalProperties: s.json() },
  );
