import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  /** HTTP status. */
  status: number;
  /** Request path. */
  path: string;
  /** Request ID. A UUID in string format to help with request tracking. */
  requestId: string;
  /** Error class name. */
  error: string;
  /** Exception message. */
  message: string;
  /** Unix timestamp. */
  timestamp: number;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  status: s.int(),
  path: s.string(),
  requestId: s.string(),
  error: s.string(),
  message: s.string(),
  timestamp: s.int(),
});
