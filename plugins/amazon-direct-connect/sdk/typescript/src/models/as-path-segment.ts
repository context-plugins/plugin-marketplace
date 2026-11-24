import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pathTypeSchema, type PathType } from "./path-type.js";

export type AsPathSegment = {
  /**
   * The type of the AS path segment. The valid values are seq (an ordered AS_SEQUENCE) and set (an
   * unordered AS_SET).
   */
  pathType?: PathType;
  /** The autonomous system (AS) numbers in the segment. */
  path?: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asPathSegmentSchema: Schema<AsPathSegment> = s.object<AsPathSegment>(
  {
    pathType: s.optional(s.lazy(() => pathTypeSchema)),
    path: s.optional(s.array(s.int())),
  },
  { additionalProperties: s.json() },
);
