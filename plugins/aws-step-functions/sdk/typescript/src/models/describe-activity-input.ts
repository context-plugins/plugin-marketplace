import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeActivityInput = {
  /** The Amazon Resource Name (ARN) of the activity to describe. */
  activityArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeActivityInputSchema: Schema<DescribeActivityInput> = s.object<DescribeActivityInput>(
  {
    activityArn: s.string(),
  },
  { additionalProperties: s.json() },
);
