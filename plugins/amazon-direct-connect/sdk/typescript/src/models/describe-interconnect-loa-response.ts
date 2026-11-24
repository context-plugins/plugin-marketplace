import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loaSchema, type Loa } from "./loa.js";

export type DescribeInterconnectLoaResponse = {
  loa?: Loa;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeInterconnectLoaResponseSchema: Schema<DescribeInterconnectLoaResponse> =
  s.object<DescribeInterconnectLoaResponse>(
    {
      loa: s.optional(s.lazy(() => loaSchema)),
    },
    { additionalProperties: s.json() },
  );
