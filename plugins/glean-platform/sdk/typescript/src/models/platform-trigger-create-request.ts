import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformTriggerDeliverySchema, type PlatformTriggerDelivery } from "./platform-trigger-delivery.js";

export type PlatformTriggerCreateRequest = {
  /** ID of the preset to instantiate. */
  presetId: string;
  /** Optional note describing this trigger. */
  description?: string;
  /** Values for the preset's inputs. */
  inputs?: Record<string, unknown>;
  delivery: PlatformTriggerDelivery;
};

export const platformTriggerCreateRequestSchema: Schema<PlatformTriggerCreateRequest> =
  s.object<PlatformTriggerCreateRequest>({
    presetId: s.string(),
    description: s.optional(s.string()),
    inputs: s.optional(s.record(s.string(), s.unknown())),
    delivery: platformTriggerDeliverySchema,
    _keysMap: {
      presetId: "preset_id",
    },
  });
