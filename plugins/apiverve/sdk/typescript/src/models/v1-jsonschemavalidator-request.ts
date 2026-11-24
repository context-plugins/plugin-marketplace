import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1JsonschemavalidatorRequest = {
  /** The JSON Schema to validate against */
  schema: string;
  /** The JSON data to validate. An empty object is a valid document and is accepted. */
  json: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1JsonschemavalidatorRequestSchema: Schema<V1JsonschemavalidatorRequest> =
  s.object<V1JsonschemavalidatorRequest>(
    {
      schema: s.string(),
      json: s.string(),
    },
    { additionalProperties: s.json() },
  );
