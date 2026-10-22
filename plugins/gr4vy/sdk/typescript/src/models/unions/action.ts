import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { auditLogActionSchema, type AuditLogAction } from "../audit-log-action.js";

/**
 * Filters the results to only the items for which the `audit-log` has an `action` that matches this
 * value.
 */
export type Action = AuditLogAction;

export const actionSchema: Schema<Action> = s.of<Action>(s.union([s.lazy(() => auditLogActionSchema)]));
