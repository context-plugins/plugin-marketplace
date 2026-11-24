import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum2PlatformPayeesApiSchema, type Datum2PlatformPayeesApi } from "./datum2-platform-payees-api.js";

export type UnauthorizedErrorSchema = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum2PlatformPayeesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unauthorizedErrorSchemaSchema: Schema<UnauthorizedErrorSchema> =
  s.object<UnauthorizedErrorSchema>(
    {
      type: s.string(),
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum2PlatformPayeesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
