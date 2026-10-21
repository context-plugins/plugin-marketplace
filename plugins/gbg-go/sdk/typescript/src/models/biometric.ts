import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Biometric = {
  id?: string;
  type?: string;
  face1Image: string;
  face2Image: string;
};

export const biometricSchema: Schema<Biometric> = s.object<Biometric>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  face1Image: s.string(),
  face2Image: s.string(),
});
