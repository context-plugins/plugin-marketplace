import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum3PlatformPayeesApiSchema, type Datum3PlatformPayeesApi } from "./datum3-platform-payees-api.js";

export type ForbiddenAccessError1 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum3PlatformPayeesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const forbiddenAccessError1Schema: Schema<ForbiddenAccessError1> = s.object<ForbiddenAccessError1>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum3PlatformPayeesApiSchema)),
  },
  { additionalProperties: s.json() },
);
