import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alertSeveritySchema, type AlertSeverity } from "./alert-severity.js";

export type Value = {
  /** Unique alert identifier */
  id?: number;
  /** Name of the alert notification */
  notificationName?: string;
  /** Severity level of the alert */
  alertSeverity?: AlertSeverity;
  /** Alert message content */
  message?: string;
  /** ISO 8601 timestamp when the alert was created */
  creationTime?: Date;
  /** The Orchestrator component that generated the alert */
  component?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueSchema: Schema<Value> = s.object<Value>(
  {
    id: s.optional(s.int()),
    notificationName: s.optional(s.string()),
    alertSeverity: s.optional(s.lazy(() => alertSeveritySchema)),
    message: s.optional(s.string()),
    creationTime: s.optional(s.dateTime()),
    component: s.optional(s.string()),
    _keysMap: {
      id: "Id",
      notificationName: "NotificationName",
      alertSeverity: "AlertSeverity",
      message: "Message",
      creationTime: "CreationTime",
      component: "Component",
    },
  },
  { additionalProperties: s.json() },
);
