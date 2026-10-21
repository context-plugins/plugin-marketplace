import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imsxCodeMinorSchema, type ImsxCodeMinor } from "./imsx-code-minor.js";

export type BadRequestResponse = {
  /** @default "failure" */
  imsxCodeMajor?: "failure";
  /** @default "error" */
  imsxSeverity?: "error";
  imsxDescription: string;
  imsxCodeMinor: ImsxCodeMinor;
  imsxErrorDetails?: string[];
};

export const badRequestResponseSchema: Schema<BadRequestResponse> = s.object<BadRequestResponse>({
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
