import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { applicationAttemptInfoSchema, type ApplicationAttemptInfo } from "./application-attempt-info.js";
import {
  applicationContextIngestionStatusSchema,
  type ApplicationContextIngestionStatus,
} from "./application-context-ingestion-status.js";
import { quantileDataStatusSchema, type QuantileDataStatus } from "./quantile-data-status.js";

/** Output only. High level information corresponding to an application. */
export type ApplicationInfo1 = {
  attempts?: ApplicationAttemptInfo[];
  applicationId?: string;
  coresPerExecutor?: number;
  quantileDataStatus?: QuantileDataStatus;
  memoryPerExecutorMb?: number;
  applicationContextIngestionStatus?: ApplicationContextIngestionStatus;
  name?: string;
  coresGranted?: number;
  maxCores?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationInfo1Schema: Schema<ApplicationInfo1> = s.object<ApplicationInfo1>(
  {
    attempts: s.optional(s.array(s.lazy(() => applicationAttemptInfoSchema))),
    applicationId: s.optional(s.string()),
    coresPerExecutor: s.optional(s.int()),
    quantileDataStatus: s.optional(s.lazy(() => quantileDataStatusSchema)),
    memoryPerExecutorMb: s.optional(s.int()),
    applicationContextIngestionStatus: s.optional(s.lazy(() => applicationContextIngestionStatusSchema)),
    name: s.optional(s.string()),
    coresGranted: s.optional(s.int()),
    maxCores: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
