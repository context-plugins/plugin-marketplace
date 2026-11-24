import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tapeArchiveSchema, type TapeArchive } from "./tape-archive.js";

export type DescribeTapeArchivesOutput = {
  /**
   * An array of virtual tape objects in the virtual tape shelf (VTS). The description includes of
   * the Amazon Resource Name (ARN) of the virtual tapes. The information returned includes the
   * Amazon Resource Names (ARNs) of the tapes, size of the tapes, status of the tapes, progress of
   * the description, and tape barcode.
   */
  tapeArchives?: TapeArchive[];
  /**
   * An opaque string that indicates the position at which the virtual tapes that were fetched for
   * description ended. Use this marker in your next request to fetch the next set of virtual tapes
   * in the virtual tape shelf (VTS). If there are no more virtual tapes to describe, this field
   * does not appear in the response.
   */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTapeArchivesOutputSchema: Schema<DescribeTapeArchivesOutput> =
  s.object<DescribeTapeArchivesOutput>(
    {
      tapeArchives: s.optional(s.array(s.lazy(() => tapeArchiveSchema))),
      marker: s.optional(s.string()),
      _keysMap: {
        tapeArchives: "TapeArchives",
        marker: "Marker",
      },
    },
    { additionalProperties: s.json() },
  );
