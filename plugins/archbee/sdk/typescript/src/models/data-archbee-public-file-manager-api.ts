import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataArchbeePublicFileManagerApi = {
  /** AWS link to the uploaded file */
  src?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataArchbeePublicFileManagerApiSchema: Schema<DataArchbeePublicFileManagerApi> =
  s.object<DataArchbeePublicFileManagerApi>(
    {
      src: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
