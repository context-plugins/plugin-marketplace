import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeConnectionsOnInterconnectRequest = {
  /** The ID of the interconnect. */
  interconnectId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeConnectionsOnInterconnectRequestSchema: Schema<DescribeConnectionsOnInterconnectRequest> =
  s.object<DescribeConnectionsOnInterconnectRequest>(
    {
      interconnectId: s.string(),
    },
    { additionalProperties: s.json() },
  );
