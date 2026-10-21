import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Biometric1 = {
  id?: string;
  type?: string;
  selfieImage: string;
  anchorImage: string;
};

export const biometric1Schema: Schema<Biometric1> = s.object<Biometric1>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  selfieImage: s.string(),
  anchorImage: s.string(),
});
