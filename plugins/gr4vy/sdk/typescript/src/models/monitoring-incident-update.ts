import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { notesSchema, type Notes } from "./unions/notes.js";

export type MonitoringIncidentUpdate = {
  /** Notes for the monitoring incident. */
  notes: Notes;
};

export const monitoringIncidentUpdateSchema: Schema<MonitoringIncidentUpdate> =
  s.object<MonitoringIncidentUpdate>({
    notes: notesSchema,
  });
