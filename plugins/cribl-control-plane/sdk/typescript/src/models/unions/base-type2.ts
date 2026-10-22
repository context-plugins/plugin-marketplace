import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  eventBreakerExistingOrNewExistingSchema,
  type EventBreakerExistingOrNewExisting,
} from "../event-breaker-existing-or-new-existing.js";
import {
  eventBreakerExistingOrNewNewSchema,
  type EventBreakerExistingOrNewNew,
} from "../event-breaker-existing-or-new-new.js";

export type BaseType2 =
  | (EventBreakerExistingOrNewNew & { existingOrNew: "new" })
  | (EventBreakerExistingOrNewExisting & { existingOrNew: "existing" });

export const baseType2Schema: Schema<BaseType2> = s.discriminatedUnion<BaseType2>("existingOrNew", {
  new: eventBreakerExistingOrNewNewSchema,
  existing: eventBreakerExistingOrNewExistingSchema,
});
