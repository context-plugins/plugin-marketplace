import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { internalProcessingModeSchema, type InternalProcessingMode } from "./internal-processing-mode.js";

export type FunctionConfSchemaNotifications = {
  /** Notification ID */
  id?: string;
  /** Notification event state field name */
  field?: string;
  /** Toggle deduplication. */
  deduplicate?: boolean;
  /** Internal no-data window processing */
  mode?: InternalProcessingMode | null;
  /** Minimum no-data window age */
  lagToleranceSec?: number;
  /** Maximum no-data window age */
  maxAgeSec?: number;
  /** Internal no-data retro-monitor processing */
  retroMonitor?: boolean;
};

export const functionConfSchemaNotificationsSchema: Schema<FunctionConfSchemaNotifications> =
  s.object<FunctionConfSchemaNotifications>({
    id: s.optional(s.string()),
    field: s.optional(s.string()),
    deduplicate: s.optional(s.boolean()),
    mode: s.optionalNullable(s.lazy(() => internalProcessingModeSchema)),
    lagToleranceSec: s.optional(s.float64()),
    maxAgeSec: s.optional(s.float64()),
    retroMonitor: s.optional(s.boolean()),
  });
