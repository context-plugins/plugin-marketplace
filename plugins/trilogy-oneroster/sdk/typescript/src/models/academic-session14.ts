import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { org5Schema, type Org5 } from "./org5.js";
import { parent3Schema, type Parent3 } from "./parent3.js";
import { statusSchema, type Status } from "./status.js";
import { type1Schema, type Type1 } from "./type1.js";

export type AcademicSession14 = {
  sourcedId: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  title: string;
  startDate: string;
  endDate: string;
  type: Type1;
  parent?: Parent3 | null;
  schoolYear: string;
  org: Org5;
};

export const academicSession14Schema: Schema<AcademicSession14> = s.object<AcademicSession14>({
  sourcedId: s.string(),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  startDate: s.string(),
  endDate: s.string(),
  type: type1Schema,
  parent: s.optionalNullable(s.lazy(() => parent3Schema)),
  schoolYear: s.string(),
  org: org5Schema,
});
