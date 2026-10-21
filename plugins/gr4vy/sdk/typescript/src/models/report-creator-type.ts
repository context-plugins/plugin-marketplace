import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportCreatorType = {
  User: "user",
  PrivateKey: "private_key",
} as const;
export type ReportCreatorType = (typeof ReportCreatorType)[keyof typeof ReportCreatorType] | (string & {});

export const reportCreatorTypeSchema: EnumSchema<ReportCreatorType> =
  s.enumOf<ReportCreatorType>(ReportCreatorType);
