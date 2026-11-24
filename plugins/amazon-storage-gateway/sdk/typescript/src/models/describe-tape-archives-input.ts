import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeTapeArchivesInput = {
  /**
   * Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you
   * want to describe.
   */
  tapeArNs?: string[];
  /** An opaque string that indicates the position at which to begin describing virtual tapes. */
  marker?: string;
  /** Specifies that the number of virtual tapes described be limited to the specified number. */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTapeArchivesInputSchema: Schema<DescribeTapeArchivesInput> =
  s.object<DescribeTapeArchivesInput>(
    {
      tapeArNs: s.optional(s.array(s.string())),
      marker: s.optional(s.string()),
      limit: s.optional(s.int()),
      _keysMap: {
        tapeArNs: "TapeARNs",
        marker: "Marker",
        limit: "Limit",
      },
    },
    { additionalProperties: s.json() },
  );
