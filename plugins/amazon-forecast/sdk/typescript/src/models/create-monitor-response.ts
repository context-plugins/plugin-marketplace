import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateMonitorResponse = {
  /** The Amazon Resource Name (ARN) of the monitor resource. */
  monitorArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createMonitorResponseSchema: Schema<CreateMonitorResponse> = s.object<CreateMonitorResponse>(
  {
    monitorArn: s.optional(s.string()),
    _keysMap: {
      monitorArn: "MonitorArn",
    },
  },
  { additionalProperties: s.json() },
);
