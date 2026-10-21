import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { biometricSchema, type Biometric } from "../biometric.js";
import { biometric1Schema, type Biometric1 } from "../biometric1.js";
import { biometric2Schema, type Biometric2 } from "../biometric2.js";
import { biometric3Schema, type Biometric3 } from "../biometric3.js";

export type Biometric4 = Biometric | Biometric1 | Biometric2 | Biometric3;

export const biometric4Schema: Schema<Biometric4> = s.of<Biometric4>(
  s.union([
    s.lazy(() => biometricSchema),
    s.lazy(() => biometric1Schema),
    s.lazy(() => biometric2Schema),
    s.lazy(() => biometric3Schema),
  ]),
);
