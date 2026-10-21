import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { org1Schema, type Org1 } from "./org1.js";
import { parent1Schema, type Parent1 } from "./parent1.js";
import { statusSchema, type Status } from "./status.js";
import { type1Schema, type Type1 } from "./type1.js";

/** Represents an academic session. */
export type AcademicSession = {
  sourcedId: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  title: string;
  startDate: string;
  endDate: string;
  type: Type1;
  parent?: Parent1 | null;
  schoolYear: number;
  org: Org1;
};

export const academicSessionSchema: Schema<AcademicSession> = s.object<AcademicSession>({
  sourcedId: s.string(),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  startDate: s.string(),
  endDate: s.string(),
  type: type1Schema,
  parent: s.optionalNullable(s.lazy(() => parent1Schema)),
  schoolYear: s.float64(),
  org: org1Schema,
});
