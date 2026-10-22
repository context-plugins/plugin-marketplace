import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalField1 = {
  /** Key */
  key: string;
  /** Value */
  value: string;
};

export const additionalField1Schema: Schema<AdditionalField1> = s.object<AdditionalField1>({
  key: s.string(),
  value: s.string(),
});
