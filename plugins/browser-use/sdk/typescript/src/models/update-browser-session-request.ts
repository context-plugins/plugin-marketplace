import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request model for updating browser session state. */
export type UpdateBrowserSessionRequest = {
  /** The action to perform on the session @default "stop" */
  action?: "stop";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBrowserSessionRequestSchema: Schema<UpdateBrowserSessionRequest> =
  s.object<UpdateBrowserSessionRequest>(
    {
      action: s.defaulted(s.literal("stop"), "stop"),
    },
    { additionalProperties: s.json() },
  );
