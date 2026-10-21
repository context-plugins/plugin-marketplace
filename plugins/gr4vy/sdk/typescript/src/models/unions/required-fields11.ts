import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { requiredFields12Schema, type RequiredFields12 } from "./required-fields12.js";

export type RequiredFields11 = boolean | Record<string, RequiredFields12>;

export const requiredFields11Schema: Schema<RequiredFields11> = s.of<RequiredFields11>(
  s.union([
    s.boolean(),
    s.record(
      s.string(),
      s.lazy(() => requiredFields12Schema),
    ),
  ]),
);
