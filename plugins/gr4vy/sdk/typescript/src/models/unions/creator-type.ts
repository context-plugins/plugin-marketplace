import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reportCreatorTypeSchema, type ReportCreatorType } from "../report-creator-type.js";

/** The type of the report creator. */
export type CreatorType = ReportCreatorType;

export const creatorTypeSchema: Schema<CreatorType> = s.of<CreatorType>(
  s.union([s.lazy(() => reportCreatorTypeSchema)]),
);
