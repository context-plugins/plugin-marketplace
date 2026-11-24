import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Push notification alert displayed when the Live Activity starts. If not provided, defaults to
 * title: 'Live Activity', body: 'Started'.
 */
export type Clixexternalv1LiveActivityAlert1 = {
  /** Title of the alert notification. */
  title: string;
  /** Body content of the alert notification. */
  body: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1LiveActivityAlert1Schema: Schema<Clixexternalv1LiveActivityAlert1> =
  s.object<Clixexternalv1LiveActivityAlert1>(
    {
      title: s.string(),
      body: s.string(),
    },
    { additionalProperties: s.json() },
  );
