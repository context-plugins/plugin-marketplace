import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalApiDtoInternalSchema, signalApiDtoSchema, type SignalApiDto } from "./signal-api-dto.js";

/** Single monitor response. */
export type MonitorResult = {
  /** Monitor payload. */
  data: SignalApiDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const monitorResultProperties: s.Shape<MonitorResult> = {
  data: signalApiDtoInternalSchema,
};

export const monitorResultInternalSchema: Schema<MonitorResult> = s.object<MonitorResult>(
  monitorResultProperties,
  { additionalProperties: s.json() },
);

export const monitorResultSchema: Schema<MonitorResult> = s.lazySchema(() =>
  s.object<MonitorResult>(
    {
      ...monitorResultProperties,
      data: signalApiDtoSchema,
    },
    { additionalProperties: s.json() },
  ),
);
