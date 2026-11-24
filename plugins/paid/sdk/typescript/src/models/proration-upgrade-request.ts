import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  prorationAttributeUpdateSchema,
  type ProrationAttributeUpdate,
} from "./proration-attribute-update.js";

/** Request to schedule a plan change with proration */
export type ProrationUpgradeRequest = {
  /** The current version of the order (for optimistic locking) */
  orderVersion: number;
  /** The date when the plan change should take effect (ISO 8601 format) */
  effectiveDate: Date;
  /** The list of order line attributes to update */
  updatedOrderLineAttributes: ProrationAttributeUpdate[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const prorationUpgradeRequestSchema: Schema<ProrationUpgradeRequest> =
  s.object<ProrationUpgradeRequest>(
    {
      orderVersion: s.int(),
      effectiveDate: s.dateTime(),
      updatedOrderLineAttributes: s.array(s.lazy(() => prorationAttributeUpdateSchema)),
    },
    { additionalProperties: s.json() },
  );
