import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformTriggerDeliverySchema, type PlatformTriggerDelivery } from "./platform-trigger-delivery.js";
import { platformTriggerStatusSchema, type PlatformTriggerStatus } from "./platform-trigger-status.js";

/** Partial update. Only the supplied fields are changed. */
export type PlatformTriggerUpdateRequest = {
  /** Current trigger lifecycle state. */
  status?: PlatformTriggerStatus;
  /** Optional note describing this trigger. */
  description?: string;
  /** Values for the preset's inputs. */
  inputs?: Record<string, unknown>;
  delivery?: PlatformTriggerDelivery;
};

export const platformTriggerUpdateRequestSchema: Schema<PlatformTriggerUpdateRequest> =
  s.object<PlatformTriggerUpdateRequest>({
    status: s.optional(s.lazy(() => platformTriggerStatusSchema)),
    description: s.optional(s.string()),
    inputs: s.optional(s.record(s.string(), s.unknown())),
    delivery: s.optional(s.lazy(() => platformTriggerDeliverySchema)),
  });
