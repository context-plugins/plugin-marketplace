import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V10GeolocationRequest = {
  ips: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v10GeolocationRequestProperties: s.Shape<V10GeolocationRequest> = {
  ips: s.array(s.string()),
};

export const v10GeolocationRequestInternalSchema: Schema<V10GeolocationRequest> =
  s.object<V10GeolocationRequest>(v10GeolocationRequestProperties, { additionalProperties: s.json() });

export const v10GeolocationRequestSchema: Schema<V10GeolocationRequest> = s.lazySchema(() =>
  s.object<V10GeolocationRequest>(
    {
      ...v10GeolocationRequestProperties,
      ips: s.array(s.string()).check(s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
