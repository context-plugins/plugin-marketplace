import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Biometric2 = {
  id?: string;
  type?: string;
  faceImage: string;
};

export const biometric2Schema: Schema<Biometric2> = s.object<Biometric2>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  faceImage: s.string(),
});
