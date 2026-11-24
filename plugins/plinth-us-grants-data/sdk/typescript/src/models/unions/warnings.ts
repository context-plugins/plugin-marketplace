import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseWarningSchema, type ResponseWarning } from "../response-warning.js";

export type Warnings = ResponseWarning[];

export const warningsSchema: Schema<Warnings> = s.of<Warnings>(
  s.union([s.array(s.lazy(() => responseWarningSchema))]),
);
