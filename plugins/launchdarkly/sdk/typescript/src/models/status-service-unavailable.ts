import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusServiceUnavailable = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const statusServiceUnavailableSchema: Schema<StatusServiceUnavailable> =
  s.object<StatusServiceUnavailable>({
    code: s.string(),
    message: s.string(),
  });
