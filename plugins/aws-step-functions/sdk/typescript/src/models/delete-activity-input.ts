import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteActivityInput = {
  /** The Amazon Resource Name (ARN) of the activity to delete. */
  activityArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteActivityInputSchema: Schema<DeleteActivityInput> = s.object<DeleteActivityInput>(
  {
    activityArn: s.string(),
  },
  { additionalProperties: s.json() },
);
