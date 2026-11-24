import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Action = {
  actionType?: string;
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionSchema: Schema<Action> = s.object<Action>(
  {
    actionType: s.optional(s.string()),
    value: s.optional(s.string()),
    _keysMap: {
      actionType: "action_type",
    },
  },
  { additionalProperties: s.json() },
);
