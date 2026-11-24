import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalApiDtoInternalSchema, signalApiDtoSchema, type SignalApiDto } from "./signal-api-dto.js";

/** Paginated list of monitors. */
export type MonitorListResult = {
  /** Total number of matching monitors across all pages. */
  total: number;
  /** Monitors returned for the requested page. */
  data: SignalApiDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const monitorListResultProperties: s.Shape<MonitorListResult> = {
  total: s.int(),
  data: s.array(s.lazy(() => signalApiDtoInternalSchema)),
};

export const monitorListResultInternalSchema: Schema<MonitorListResult> = s.object<MonitorListResult>(
  monitorListResultProperties,
  { additionalProperties: s.json() },
);

export const monitorListResultSchema: Schema<MonitorListResult> = s.lazySchema(() =>
  s.object<MonitorListResult>(
    {
      ...monitorListResultProperties,
      data: s.array(s.lazy(() => signalApiDtoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
