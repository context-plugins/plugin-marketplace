import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDeleteColumnMetricMonitorResponse = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDeleteColumnMetricMonitorResponseSchema: Schema<PublicApiDeleteColumnMetricMonitorResponse> =
  s.object<PublicApiDeleteColumnMetricMonitorResponse>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
