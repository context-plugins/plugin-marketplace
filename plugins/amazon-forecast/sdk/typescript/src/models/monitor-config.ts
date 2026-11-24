import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MonitorConfig = {
  /** The name of the monitor resource. */
  monitorName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorConfigSchema: Schema<MonitorConfig> = s.object<MonitorConfig>(
  {
    monitorName: s.string(),
    _keysMap: {
      monitorName: "MonitorName",
    },
  },
  { additionalProperties: s.json() },
);
