import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  platformFailureErrorInternalSchema,
  platformFailureErrorSchema,
  type PlatformFailureError,
} from "./platform-failure-error.js";

export type Data2 = {
  jobId: string;
  /** @default "failed" */
  status?: "failed";
  error: PlatformFailureError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const data2Properties: s.Shape<Data2> = {
  jobId: s.string(),
  status: s.defaulted(s.literal("failed"), "failed"),
  error: platformFailureErrorInternalSchema,
};

export const data2InternalSchema: Schema<Data2> = s.object<Data2>(data2Properties, {
  additionalProperties: s.json(),
});

export const data2Schema: Schema<Data2> = s.lazySchema(() =>
  s.object<Data2>(
    {
      ...data2Properties,
      error: platformFailureErrorSchema,
    },
    { additionalProperties: s.json() },
  ),
);
