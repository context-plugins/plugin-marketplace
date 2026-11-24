import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetIntrospectionSchemaResponse = {
  /**
   * The schema, in GraphQL Schema Definition Language (SDL) format. For more information, see the
   * GraphQL SDL documentation.
   */
  schema?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getIntrospectionSchemaResponseSchema: Schema<GetIntrospectionSchemaResponse> =
  s.object<GetIntrospectionSchemaResponse>(
    {
      schema: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
