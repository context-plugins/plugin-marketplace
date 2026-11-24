import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contextSchema, type Context } from "./context.js";
import { statusCodeSchema, type StatusCode } from "./status-code.js";

export type FleetStatus = {
  /**
   * The status code of the compute fleet. Valid values include: CREATING: The compute fleet is
   * being created. UPDATING: The compute fleet is being updated. ROTATING: The compute fleet is
   * being rotated. PENDING_DELETION: The compute fleet is pending deletion. DELETING: The compute
   * fleet is being deleted. CREATE_FAILED: The compute fleet has failed to create.
   * UPDATE_ROLLBACK_FAILED: The compute fleet has failed to update and could not rollback to
   * previous state. ACTIVE: The compute fleet has succeeded and is active.
   */
  statusCode?: StatusCode;
  /**
   * Additional information about a compute fleet. Valid values include: CREATE_FAILED: The compute
   * fleet has failed to create. UPDATE_FAILED: The compute fleet has failed to update.
   */
  context?: Context;
  /** A message associated with the status of a compute fleet. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fleetStatusSchema: Schema<FleetStatus> = s.object<FleetStatus>(
  {
    statusCode: s.optional(s.lazy(() => statusCodeSchema)),
    context: s.optional(s.lazy(() => contextSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
