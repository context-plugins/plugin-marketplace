import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { peopleInspectionTargetsSchema, type PeopleInspectionTargets } from "./people-inspection-targets.js";

/** The people and actions to inspect. */
export type PeopleInspectRequest = {
  /** A map of inspectable types to the items and actions to inspect. */
  inspections: PeopleInspectionTargets;
};

export const peopleInspectRequestSchema: Schema<PeopleInspectRequest> = s.object<PeopleInspectRequest>({
  inspections: peopleInspectionTargetsSchema,
});
