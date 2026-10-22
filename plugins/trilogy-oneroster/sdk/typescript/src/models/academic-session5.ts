import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { org5Schema, type Org5 } from "./org5.js";
import { parent3Schema, type Parent3 } from "./parent3.js";
import { statusSchema, type Status } from "./status.js";

export type AcademicSession5 = {
  sourcedId: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  title: string;
  startDate: string;
  endDate: string;
  /** @default "gradingPeriod" */
  type?: "gradingPeriod";
  parent?: Parent3 | null;
  schoolYear: string;
  org: Org5;
};

export const academicSession5Schema: Schema<AcademicSession5> = s.object<AcademicSession5>({
  sourcedId: s.string(),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  startDate: s.string(),
  endDate: s.string(),
  type: s.defaulted(s.literal("gradingPeriod"), "gradingPeriod"),
  parent: s.optionalNullable(s.lazy(() => parent3Schema)),
  schoolYear: s.string(),
  org: org5Schema,
});
