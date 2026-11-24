import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result7InternalSchema, result7Schema, type Result7 } from "./result7.js";

export type GoogleNewsMonitorResponse = {
  success: boolean;
  /** Google News results data */
  result: Result7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googleNewsMonitorResponseProperties: s.Shape<GoogleNewsMonitorResponse> = {
  success: s.boolean(),
  result: result7InternalSchema,
};

export const googleNewsMonitorResponseInternalSchema: Schema<GoogleNewsMonitorResponse> =
  s.object<GoogleNewsMonitorResponse>(googleNewsMonitorResponseProperties, {
    additionalProperties: s.json(),
  });

export const googleNewsMonitorResponseSchema: Schema<GoogleNewsMonitorResponse> = s.lazySchema(() =>
  s.object<GoogleNewsMonitorResponse>(
    {
      ...googleNewsMonitorResponseProperties,
      result: result7Schema,
    },
    { additionalProperties: s.json() },
  ),
);
