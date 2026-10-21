import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { existingOrNew1Schema, type ExistingOrNew1 } from "./existing-or-new1.js";

export type EventBreakerExistingOrNewExisting = {
  /** Whether to use an existing Event Breaker Ruleset or create a new one inline. */
  existingOrNew?: ExistingOrNew1;
  /** ID of an existing event breaker ruleset to apply. */
  existingRule?: string;
};

export const eventBreakerExistingOrNewExistingSchema: Schema<EventBreakerExistingOrNewExisting> =
  s.object<EventBreakerExistingOrNewExisting>({
    existingOrNew: s.optional(s.lazy(() => existingOrNew1Schema)),
    existingRule: s.optional(s.string()),
  });
