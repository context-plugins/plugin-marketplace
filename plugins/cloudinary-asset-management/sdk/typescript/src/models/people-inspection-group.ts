import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The items to inspect for a type and the actions to check against them. */
export type PeopleInspectionGroup = {
  /** A map of caller-supplied cache keys to the person identifier to inspect. */
  items: Record<string, unknown>;
  /** A map of action names to optional action context to inspect. */
  actions: Record<string, unknown>;
};

export const peopleInspectionGroupSchema: Schema<PeopleInspectionGroup> = s.object<PeopleInspectionGroup>({
  items: s.record(s.string(), s.unknown()),
  actions: s.record(s.string(), s.unknown()),
});
