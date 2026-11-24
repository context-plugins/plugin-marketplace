import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Action = {
  /** The action name */
  name?: string;
  /** The action type */
  type?: string;
  /** The action status */
  status?: string;
  /** When the action started */
  startTime?: Date;
  /** When the action ended */
  endTime?: Date;
  /** Action run time in milliseconds */
  runTimeMillis?: number;
  /** URL to the action output */
  outputUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const actionProperties: s.Shape<Action> = {
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  status: s.optional(s.string()),
  startTime: s.optional(s.dateTime()),
  endTime: s.optional(s.dateTime()),
  runTimeMillis: s.optional(s.int()),
  outputUrl: s.optional(s.string()),
  _keysMap: {
    startTime: "start_time",
    endTime: "end_time",
    runTimeMillis: "run_time_millis",
    outputUrl: "output_url",
  },
};

export const actionInternalSchema: Schema<Action> = s.object<Action>(actionProperties, {
  additionalProperties: s.json(),
});

export const actionSchema: Schema<Action> = s.lazySchema(() =>
  s.object<Action>(
    {
      ...actionProperties,
      outputUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
