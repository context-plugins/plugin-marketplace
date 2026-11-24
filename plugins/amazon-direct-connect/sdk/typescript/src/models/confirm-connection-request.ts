import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConfirmConnectionRequest = {
  /** The ID of the hosted connection. */
  connectionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const confirmConnectionRequestSchema: Schema<ConfirmConnectionRequest> =
  s.object<ConfirmConnectionRequest>(
    {
      connectionId: s.string(),
    },
    { additionalProperties: s.json() },
  );
