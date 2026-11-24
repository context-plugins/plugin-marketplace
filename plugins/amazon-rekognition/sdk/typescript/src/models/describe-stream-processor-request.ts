import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeStreamProcessorRequest = {
  /** Name of the stream processor for which you want information. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeStreamProcessorRequestSchema: Schema<DescribeStreamProcessorRequest> =
  s.object<DescribeStreamProcessorRequest>(
    {
      name: s.string(),
      _keysMap: {
        name: "Name",
      },
    },
    { additionalProperties: s.json() },
  );
