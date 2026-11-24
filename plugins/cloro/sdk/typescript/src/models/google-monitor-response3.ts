import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result13InternalSchema, result13Schema, type Result13 } from "./result13.js";

export type GoogleMonitorResponse3 = {
  success: boolean;
  /** Google search results data */
  result: Result13;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googleMonitorResponse3Properties: s.Shape<GoogleMonitorResponse3> = {
  success: s.boolean(),
  result: result13InternalSchema,
};

export const googleMonitorResponse3InternalSchema: Schema<GoogleMonitorResponse3> =
  s.object<GoogleMonitorResponse3>(googleMonitorResponse3Properties, { additionalProperties: s.json() });

export const googleMonitorResponse3Schema: Schema<GoogleMonitorResponse3> = s.lazySchema(() =>
  s.object<GoogleMonitorResponse3>(
    {
      ...googleMonitorResponse3Properties,
      result: result13Schema,
    },
    { additionalProperties: s.json() },
  ),
);
