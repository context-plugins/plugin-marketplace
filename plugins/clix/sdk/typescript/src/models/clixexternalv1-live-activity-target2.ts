import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Clixexternalv1LiveActivityTarget2 = {
  /** ID of the target user. */
  userId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1LiveActivityTarget2Schema: Schema<Clixexternalv1LiveActivityTarget2> =
  s.object<Clixexternalv1LiveActivityTarget2>(
    {
      userId: s.string(),
      _keysMap: {
        userId: "user_id",
      },
    },
    { additionalProperties: s.json() },
  );
