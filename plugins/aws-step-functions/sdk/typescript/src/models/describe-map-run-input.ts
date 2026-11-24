import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeMapRunInput = {
  /** The Amazon Resource Name (ARN) that identifies a Map Run. */
  mapRunArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeMapRunInputSchema: Schema<DescribeMapRunInput> = s.object<DescribeMapRunInput>(
  {
    mapRunArn: s.string(),
  },
  { additionalProperties: s.json() },
);
