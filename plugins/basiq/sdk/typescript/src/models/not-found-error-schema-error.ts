import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum1PlatformPayeesApiSchema, type Datum1PlatformPayeesApi } from "./datum1-platform-payees-api.js";

export type NotFoundErrorSchemaError = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum1PlatformPayeesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notFoundErrorSchemaErrorSchema: Schema<NotFoundErrorSchemaError> =
  s.object<NotFoundErrorSchemaError>(
    {
      type: s.string(),
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum1PlatformPayeesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
