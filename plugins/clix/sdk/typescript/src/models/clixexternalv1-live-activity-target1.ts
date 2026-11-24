import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Clixexternalv1LiveActivityTarget1 = {
  /** ID of the target device. */
  deviceId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1LiveActivityTarget1Schema: Schema<Clixexternalv1LiveActivityTarget1> =
  s.object<Clixexternalv1LiveActivityTarget1>(
    {
      deviceId: s.string(),
      _keysMap: {
        deviceId: "device_id",
      },
    },
    { additionalProperties: s.json() },
  );
