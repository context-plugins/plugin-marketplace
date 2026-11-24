import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result3InternalSchema, result3Schema, type Result3 } from "./result3.js";

export type GoogleMonitorResponse = {
  success: boolean;
  /** Google search results data */
  result: Result3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googleMonitorResponseProperties: s.Shape<GoogleMonitorResponse> = {
  success: s.boolean(),
  result: result3InternalSchema,
};

export const googleMonitorResponseInternalSchema: Schema<GoogleMonitorResponse> =
  s.object<GoogleMonitorResponse>(googleMonitorResponseProperties, { additionalProperties: s.json() });

export const googleMonitorResponseSchema: Schema<GoogleMonitorResponse> = s.lazySchema(() =>
  s.object<GoogleMonitorResponse>(
    {
      ...googleMonitorResponseProperties,
      result: result3Schema,
    },
    { additionalProperties: s.json() },
  ),
);
