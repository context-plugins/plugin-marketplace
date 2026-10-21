import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReportExecutionUrlGenerate = {
  /** The URL expiration time, in minutes. @default 5 */
  expiresIn?: number;
};

export const reportExecutionUrlGenerateSchema: Schema<ReportExecutionUrlGenerate> =
  s.object<ReportExecutionUrlGenerate>({
    expiresIn: s.defaulted(s.int(), 5),
    _keysMap: {
      expiresIn: "expires_in",
    },
  });
