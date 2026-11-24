import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tapeInfoSchema, type TapeInfo } from "./tape-info.js";

export type ListTapesOutput = {
  tapeInfos?: TapeInfo[];
  /**
   * A string that indicates the position at which to begin returning the next list of tapes. Use
   * the marker in your next request to continue pagination of tapes. If there are no more tapes to
   * list, this element does not appear in the response body.
   */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTapesOutputSchema: Schema<ListTapesOutput> = s.object<ListTapesOutput>(
  {
    tapeInfos: s.optional(s.array(s.lazy(() => tapeInfoSchema))),
    marker: s.optional(s.string()),
    _keysMap: {
      tapeInfos: "TapeInfos",
      marker: "Marker",
    },
  },
  { additionalProperties: s.json() },
);
