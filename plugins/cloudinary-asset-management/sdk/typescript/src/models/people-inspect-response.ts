import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The permission inspection results. */
export type PeopleInspectResponse = {
  /** A status message for the inspection request. */
  message?: string;
  /** A map of inspected type to per-item, per-action permission results (true if permitted). */
  inspections: Record<string, unknown>;
};

export const peopleInspectResponseSchema: Schema<PeopleInspectResponse> = s.object<PeopleInspectResponse>({
  message: s.optional(s.string()),
  inspections: s.record(s.string(), s.unknown()),
});
