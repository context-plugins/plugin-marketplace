import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tapeSchema, type Tape } from "./tape.js";

export type DescribeTapesOutput = {
  /** An array of virtual tape descriptions. */
  tapes?: Tape[];
  /**
   * An opaque string that can be used as part of a subsequent DescribeTapes call to retrieve the
   * next page of results. If a response does not contain a marker, then there are no more results
   * to be retrieved.
   */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTapesOutputSchema: Schema<DescribeTapesOutput> = s.object<DescribeTapesOutput>(
  {
    tapes: s.optional(s.array(s.lazy(() => tapeSchema))),
    marker: s.optional(s.string()),
    _keysMap: {
      tapes: "Tapes",
      marker: "Marker",
    },
  },
  { additionalProperties: s.json() },
);
