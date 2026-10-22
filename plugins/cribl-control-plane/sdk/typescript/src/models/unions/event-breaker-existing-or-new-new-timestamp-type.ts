import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  eventBreakerExistingOrNewNewTimestampTypeAutoSchema,
  type EventBreakerExistingOrNewNewTimestampTypeAuto,
} from "../event-breaker-existing-or-new-new-timestamp-type-auto.js";
import {
  eventBreakerExistingOrNewNewTimestampTypeCurrentSchema,
  type EventBreakerExistingOrNewNewTimestampTypeCurrent,
} from "../event-breaker-existing-or-new-new-timestamp-type-current.js";
import {
  eventBreakerExistingOrNewNewTimestampTypeFormatSchema,
  type EventBreakerExistingOrNewNewTimestampTypeFormat,
} from "../event-breaker-existing-or-new-new-timestamp-type-format.js";

export type EventBreakerExistingOrNewNewTimestampType =
  | (EventBreakerExistingOrNewNewTimestampTypeAuto & { type: "auto" })
  | (EventBreakerExistingOrNewNewTimestampTypeFormat & { type: "format" })
  | (EventBreakerExistingOrNewNewTimestampTypeCurrent & { type: "current" });

export const eventBreakerExistingOrNewNewTimestampTypeSchema: Schema<EventBreakerExistingOrNewNewTimestampType> =
  s.discriminatedUnion<EventBreakerExistingOrNewNewTimestampType>("type", {
    auto: eventBreakerExistingOrNewNewTimestampTypeAutoSchema,
    format: eventBreakerExistingOrNewNewTimestampTypeFormatSchema,
    current: eventBreakerExistingOrNewNewTimestampTypeCurrentSchema,
  });
