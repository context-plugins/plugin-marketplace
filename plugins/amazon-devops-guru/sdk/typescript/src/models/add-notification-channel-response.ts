import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddNotificationChannelResponse = {
  /** The ID of the added notification channel. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addNotificationChannelResponseSchema: Schema<AddNotificationChannelResponse> =
  s.object<AddNotificationChannelResponse>(
    {
      id: s.string(),
      _keysMap: {
        id: "Id",
      },
    },
    { additionalProperties: s.json() },
  );
