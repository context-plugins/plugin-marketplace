import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeMobileNumberSchema, type PazeMobileNumber } from "../paze-mobile-number.js";

export type MobileNumber = PazeMobileNumber;

export const mobileNumberSchema: Schema<MobileNumber> = s.of<MobileNumber>(
  s.union([s.lazy(() => pazeMobileNumberSchema)]),
);
