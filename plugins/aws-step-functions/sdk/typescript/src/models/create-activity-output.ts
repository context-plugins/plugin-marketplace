import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateActivityOutput = {
  /** The Amazon Resource Name (ARN) that identifies the created activity. */
  activityArn: string;
  /** The date the activity is created. */
  creationDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createActivityOutputSchema: Schema<CreateActivityOutput> = s.object<CreateActivityOutput>(
  {
    activityArn: s.string(),
    creationDate: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
