import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformTriggerDeliverySchema, type PlatformTriggerDelivery } from "./platform-trigger-delivery.js";
import { platformTriggerStatusSchema, type PlatformTriggerStatus } from "./platform-trigger-status.js";

export type PlatformTrigger = {
  /** ID of the trigger. */
  triggerId: string;
  /** ID of the preset this trigger was created from. */
  presetId: string;
  /** Optional caller-supplied note describing this trigger. */
  description?: string;
  /** Current trigger lifecycle state. */
  status: PlatformTriggerStatus;
  /** Values supplied for the preset's inputs. */
  inputs?: Record<string, unknown>;
  delivery: PlatformTriggerDelivery;
  /** Time the trigger was created. */
  createdAt: Date;
  /** Time the trigger was last updated. */
  updatedAt: Date;
};

export const platformTriggerSchema: Schema<PlatformTrigger> = s.object<PlatformTrigger>({
  triggerId: s.string(),
  presetId: s.string(),
  description: s.optional(s.string()),
  status: platformTriggerStatusSchema,
  inputs: s.optional(s.record(s.string(), s.unknown())),
  delivery: platformTriggerDeliverySchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    triggerId: "trigger_id",
    presetId: "preset_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
