import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ContactextractorRequest = {
  /** The URL of the web page to extract contact data from */
  url: string;
  /** Limits the number of found contact details found on the page. Set -1 for unlimited */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ContactextractorRequestSchema: Schema<V1ContactextractorRequest> =
  s.object<V1ContactextractorRequest>(
    {
      url: s.string(),
      limit: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
