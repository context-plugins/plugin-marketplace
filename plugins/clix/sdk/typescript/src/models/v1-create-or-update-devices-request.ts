import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createOrUpdateDevicesRequestDeviceForRequestSchema,
  type CreateOrUpdateDevicesRequestDeviceForRequest,
} from "./create-or-update-devices-request-device-for-request.js";

export type V1CreateOrUpdateDevicesRequest = {
  devices?: CreateOrUpdateDevicesRequestDeviceForRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CreateOrUpdateDevicesRequestSchema: Schema<V1CreateOrUpdateDevicesRequest> =
  s.object<V1CreateOrUpdateDevicesRequest>(
    {
      devices: s.optional(s.array(s.lazy(() => createOrUpdateDevicesRequestDeviceForRequestSchema))),
    },
    { additionalProperties: s.json() },
  );
