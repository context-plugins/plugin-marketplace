import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Alert notification displayed when starting a Live Activity. */
export type Clixexternalv1LiveActivityAlert = {
  /** Title of the alert notification. */
  title: string;
  /** Body content of the alert notification. */
  body: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1LiveActivityAlertSchema: Schema<Clixexternalv1LiveActivityAlert> =
  s.object<Clixexternalv1LiveActivityAlert>(
    {
      title: s.string(),
      body: s.string(),
    },
    { additionalProperties: s.json() },
  );
