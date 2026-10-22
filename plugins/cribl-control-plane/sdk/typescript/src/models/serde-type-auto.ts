import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

export type SerdeTypeAuto = {
  /** Parser or formatter type to use. */
  type?: Type3;
};

export const serdeTypeAutoSchema: Schema<SerdeTypeAuto> = s.object<SerdeTypeAuto>({
  type: s.optional(s.lazy(() => type3Schema)),
});
