import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ApisSchemacreationRequest = {
  /** The schema definition, in GraphQL schema language format. */
  definition: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ApisSchemacreationRequestSchema: Schema<V1ApisSchemacreationRequest> =
  s.object<V1ApisSchemacreationRequest>(
    {
      definition: s.string(),
    },
    { additionalProperties: s.json() },
  );
