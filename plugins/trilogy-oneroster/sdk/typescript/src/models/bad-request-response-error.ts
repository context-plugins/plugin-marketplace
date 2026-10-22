import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imsxCodeMinorSchema, type ImsxCodeMinor } from "./imsx-code-minor.js";

export type BadRequestResponseError = {
  /** @default "failure" */
  imsxCodeMajor?: "failure";
  /** @default "error" */
  imsxSeverity?: "error";
  imsxDescription: string;
  imsxCodeMinor: ImsxCodeMinor;
  imsxErrorDetails?: string[];
};

export const badRequestResponseErrorSchema: Schema<BadRequestResponseError> =
  s.object<BadRequestResponseError>({
    imsxCodeMajor: s.defaulted(s.literal("failure"), "failure"),
    imsxSeverity: s.defaulted(s.literal("error"), "error"),
    imsxDescription: s.string(),
    imsxCodeMinor: imsxCodeMinorSchema,
    imsxErrorDetails: s.optional(s.array(s.string())),
    _keysMap: {
      imsxCodeMajor: "imsx_codeMajor",
      imsxSeverity: "imsx_severity",
      imsxDescription: "imsx_description",
      imsxCodeMinor: "imsx_CodeMinor",
      imsxErrorDetails: "imsx_error_details",
    },
  });
