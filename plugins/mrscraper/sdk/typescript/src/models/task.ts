import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskBrowserTypeSchema, type TaskBrowserType } from "./task-browser-type.js";
import { taskDeviceOsSchema, type TaskDeviceOs } from "./task-device-os.js";
import { taskTaskStatusSchema, type TaskTaskStatus } from "./task-task-status.js";

export type Task = {
  action?: string;
  browserType?: TaskBrowserType;
  callbackUrl?: string;
  createdAt?: string;
  deviceOs?: TaskDeviceOs;
  domain?: string;
  fingerprintId?: number;
  id?: number;
  jobId?: number;
  proxy?: string;
  result?: string;
  retryCount?: number;
  scrapeTime?: number;
  solution?: string;
  status?: TaskTaskStatus;
  statusMessage?: string;
  taskDetails?: Record<string, unknown>;
  updatedAt?: string;
  userId?: string;
  originalTaskId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskSchema: Schema<Task> = s.object<Task>(
  {
    action: s.optional(s.string()),
    browserType: s.optional(s.lazy(() => taskBrowserTypeSchema)),
    callbackUrl: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    deviceOs: s.optional(s.lazy(() => taskDeviceOsSchema)),
    domain: s.optional(s.string()),
    fingerprintId: s.optional(s.int()),
    id: s.optional(s.int()),
    jobId: s.optional(s.int()),
    proxy: s.optional(s.string()),
    result: s.optional(s.string()),
    retryCount: s.optional(s.int()),
    scrapeTime: s.optional(s.float64()),
    solution: s.optional(s.string()),
    status: s.optional(s.lazy(() => taskTaskStatusSchema)),
    statusMessage: s.optional(s.string()),
    taskDetails: s.optional(s.record(s.string(), s.unknown())),
    updatedAt: s.optional(s.string()),
    userId: s.optional(s.string()),
    originalTaskId: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
