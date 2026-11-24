import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumPlatformPayeesApiSchema, type DatumPlatformPayeesApi } from "./datum-platform-payees-api.js";

export type BadRequestErrorSchemaError = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: DatumPlatformPayeesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const badRequestErrorSchemaErrorSchema: Schema<BadRequestErrorSchemaError> =
  s.object<BadRequestErrorSchemaError>(
    {
      type: s.string(),
      correlationId: s.string(),
      data: s.array(s.lazy(() => datumPlatformPayeesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
