import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ImsxCodeMinorField = {
  /** @default "TargetEndSystem" */
  imsxCodeMinorFieldName?: "TargetEndSystem";
  /** @default "invaliddata" */
  imsxCodeMinorFieldValue?: "invaliddata";
};

export const imsxCodeMinorFieldSchema: Schema<ImsxCodeMinorField> = s.object<ImsxCodeMinorField>({
  imsxCodeMinorFieldName: s.defaulted(s.literal("TargetEndSystem"), "TargetEndSystem"),
  imsxCodeMinorFieldValue: s.defaulted(s.literal("invaliddata"), "invaliddata"),
  _keysMap: {
    imsxCodeMinorFieldName: "imsx_codeMinorFieldName",
    imsxCodeMinorFieldValue: "imsx_codeMinorFieldValue",
  },
});
