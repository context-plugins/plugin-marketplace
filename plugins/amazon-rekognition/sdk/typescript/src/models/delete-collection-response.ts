import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteCollectionResponse = {
  /** HTTP status code that indicates the result of the operation. */
  statusCode?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteCollectionResponseSchema: Schema<DeleteCollectionResponse> =
  s.object<DeleteCollectionResponse>(
    {
      statusCode: s.optional(s.int()),
      _keysMap: {
        statusCode: "StatusCode",
      },
    },
    { additionalProperties: s.json() },
  );
