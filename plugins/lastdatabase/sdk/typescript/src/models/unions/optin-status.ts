import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type OptinStatus = boolean | number | string;

export const optinStatusSchema: Schema<OptinStatus> = s.of<OptinStatus>(
  s.union([s.boolean(), s.int(), s.string()]),
);
