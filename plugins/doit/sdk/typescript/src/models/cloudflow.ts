import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lastExecutionStatusSchema, type LastExecutionStatus } from "./last-execution-status.js";

export type Cloudflow = {
  id: string;
  name: string;
  description?: string;
  instructions?: string | null;
  published: boolean;
  triggerType?: string | null;
  createTime: Date;
  updateTime?: Date | null;
  lastExecutedTime?: Date | null;
  lastExecutionStatus?: LastExecutionStatus | null;
  /** Next scheduled execution time. `null` when the CloudFlow has no active schedule. */
  nextRun?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowSchema: Schema<Cloudflow> = s.object<Cloudflow>(
  {
    id: s.string(),
    name: s.string(),
    description: s.optional(s.string()),
    instructions: s.optionalNullable(s.string()),
    published: s.boolean(),
    triggerType: s.optionalNullable(s.string()),
    createTime: s.dateTime(),
    updateTime: s.optionalNullable(s.dateTime()),
    lastExecutedTime: s.optionalNullable(s.dateTime()),
    lastExecutionStatus: s.optionalNullable(s.lazy(() => lastExecutionStatusSchema)),
    nextRun: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
