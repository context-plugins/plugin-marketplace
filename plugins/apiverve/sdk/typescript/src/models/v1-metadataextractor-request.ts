import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1MetadataextractorRequest = {
  /** The URL of the web page to extract metadata from */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MetadataextractorRequestSchema: Schema<V1MetadataextractorRequest> =
  s.object<V1MetadataextractorRequest>(
    {
      url: s.string(),
    },
    { additionalProperties: s.json() },
  );
