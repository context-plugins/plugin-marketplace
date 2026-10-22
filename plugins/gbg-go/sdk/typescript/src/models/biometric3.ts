import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Biometric3 = {
  id?: string;
  type?: string;
  selfieImage: string;
  selfieImageEncryption?: boolean;
};

export const biometric3Schema: Schema<Biometric3> = s.object<Biometric3>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  selfieImage: s.string(),
  selfieImageEncryption: s.optional(s.boolean()),
});
