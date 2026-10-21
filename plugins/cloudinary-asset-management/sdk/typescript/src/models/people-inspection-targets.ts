import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { peopleInspectionGroupSchema, type PeopleInspectionGroup } from "./people-inspection-group.js";

/** A map of inspectable types to the items and actions to inspect. */
export type PeopleInspectionTargets = {
  /** The items to inspect for a type and the actions to check against them. */
  person?: PeopleInspectionGroup;
};

export const peopleInspectionTargetsSchema: Schema<PeopleInspectionTargets> =
  s.object<PeopleInspectionTargets>({
    person: s.optional(s.lazy(() => peopleInspectionGroupSchema)),
    _keysMap: {
      person: "Person",
    },
  });
