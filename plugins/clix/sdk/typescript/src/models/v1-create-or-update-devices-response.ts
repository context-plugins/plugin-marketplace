import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clixexternalv1DeviceSchema, type Clixexternalv1Device } from "./clixexternalv1-device.js";

export type V1CreateOrUpdateDevicesResponse = {
  devices?: Clixexternalv1Device[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CreateOrUpdateDevicesResponseSchema: Schema<V1CreateOrUpdateDevicesResponse> =
  s.object<V1CreateOrUpdateDevicesResponse>(
    {
      devices: s.optional(s.array(s.lazy(() => clixexternalv1DeviceSchema))),
    },
    { additionalProperties: s.json() },
  );
