import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logAnomalyClassSchema, type LogAnomalyClass } from "./log-anomaly-class.js";

export type LogAnomalyShowcase = {
  /** A list of anomalous log events that may be related. */
  logAnomalyClasses?: LogAnomalyClass[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logAnomalyShowcaseSchema: Schema<LogAnomalyShowcase> = s.object<LogAnomalyShowcase>(
  {
    logAnomalyClasses: s.optional(s.array(s.lazy(() => logAnomalyClassSchema))),
    _keysMap: {
      logAnomalyClasses: "LogAnomalyClasses",
    },
  },
  { additionalProperties: s.json() },
);
