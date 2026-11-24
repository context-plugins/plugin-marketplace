import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Session = {
  hashedId?: string;
  name?: string;
  duration?: number;
  os?: string;
  osVersion?: string;
  browserVersion?: string;
  browser?: string;
  device?: string | null;
  status?: string;
  reason?: string | null;
  buildName?: string;
  projectName?: string;
  logs?: string;
  browserUrl?: string;
  publicUrl?: string;
  appiumLogsUrl?: string;
  videoUrl?: string;
  browserConsoleLogsUrl?: string;
  harLogsUrl?: string;
  seleniumLogsUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionSchema: Schema<Session> = s.object<Session>(
  {
    hashedId: s.optional(s.string()),
    name: s.optional(s.string()),
    duration: s.optional(s.int()),
    os: s.optional(s.string()),
    osVersion: s.optional(s.string()),
    browserVersion: s.optional(s.string()),
    browser: s.optional(s.string()),
    device: s.optionalNullable(s.string()),
    status: s.optional(s.string()),
    reason: s.optionalNullable(s.string()),
    buildName: s.optional(s.string()),
    projectName: s.optional(s.string()),
    logs: s.optional(s.string()),
    browserUrl: s.optional(s.string()),
    publicUrl: s.optional(s.string()),
    appiumLogsUrl: s.optional(s.string()),
    videoUrl: s.optional(s.string()),
    browserConsoleLogsUrl: s.optional(s.string()),
    harLogsUrl: s.optional(s.string()),
    seleniumLogsUrl: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      hashedId: "hashed_id",
      osVersion: "os_version",
      browserVersion: "browser_version",
      buildName: "build_name",
      projectName: "project_name",
      browserUrl: "browser_url",
      publicUrl: "public_url",
      appiumLogsUrl: "appium_logs_url",
      videoUrl: "video_url",
      browserConsoleLogsUrl: "browser_console_logs_url",
      harLogsUrl: "har_logs_url",
      seleniumLogsUrl: "selenium_logs_url",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
