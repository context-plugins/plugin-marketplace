import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imsxCodeMinorFieldSchema, type ImsxCodeMinorField } from "./imsx-code-minor-field.js";

export type ImsxCodeMinor = {
  imsxCodeMinorField: ImsxCodeMinorField[];
};

export const imsxCodeMinorSchema: Schema<ImsxCodeMinor> = s.object<ImsxCodeMinor>({
  imsxCodeMinorField: s.array(s.lazy(() => imsxCodeMinorFieldSchema)),
  _keysMap: {
    imsxCodeMinorField: "imsx_codeMinorField",
  },
});
