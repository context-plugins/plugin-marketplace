import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** If set, this object contains the last status change made by a user for this insight */
export type LastInsightStatusChange = {
  /**
   * the reference to the user who made the change (if it was made by a user) If the change was made
   * by an automated system, this reference is empty.
   */
  userId: string;
  lastChangedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lastInsightStatusChangeSchema: Schema<LastInsightStatusChange> =
  s.object<LastInsightStatusChange>(
    {
      userId: s.string(),
      lastChangedAt: s.dateTime(),
    },
    { additionalProperties: s.json() },
  );
