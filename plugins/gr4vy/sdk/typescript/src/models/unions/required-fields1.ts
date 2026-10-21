import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { requiredFields11Schema, type RequiredFields11 } from "./required-fields11.js";

export type RequiredFields1 = Record<string, RequiredFields11>;

export const requiredFields1Schema: Schema<RequiredFields1> = s.of<RequiredFields1>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => requiredFields11Schema),
    ),
  ]),
);
