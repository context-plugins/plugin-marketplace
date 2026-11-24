import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The input of a trigger action to run IDR. */
export type TriggerRunIdrInput = {
  /** Whether to resync the entire Identity Graph or process incrementally. @default false */
  fullRerun?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const triggerRunIdrInputSchema: Schema<TriggerRunIdrInput> = s.object<TriggerRunIdrInput>(
  {
    fullRerun: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
