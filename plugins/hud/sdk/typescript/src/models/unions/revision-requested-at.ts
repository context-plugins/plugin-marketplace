import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RevisionRequestedAt = Date;

export const revisionRequestedAtSchema: Schema<RevisionRequestedAt> = s.of<RevisionRequestedAt>(
  s.union([s.dateTime()]),
);
