import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SubjectSnapshot = Record<string, unknown>;

export const subjectSnapshotSchema: Schema<SubjectSnapshot> = s.of<SubjectSnapshot>(
  s.union([s.record(s.string(), s.unknown())]),
);
