import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteConnectionRequest = {
  /** The ID of the connection. */
  connectionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteConnectionRequestSchema: Schema<DeleteConnectionRequest> =
  s.object<DeleteConnectionRequest>(
    {
      connectionId: s.string(),
    },
    { additionalProperties: s.json() },
  );
