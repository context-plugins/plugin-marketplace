import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SessionShareUpdateRequest = {
  isActive: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionShareUpdateRequestSchema: Schema<SessionShareUpdateRequest> =
  s.object<SessionShareUpdateRequest>(
    {
      isActive: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
