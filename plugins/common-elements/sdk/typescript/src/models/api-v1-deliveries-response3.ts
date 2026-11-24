import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1DeliveriesResponse3 = {
  /** @default "True" */
  ok?: "True";
  /** Response payload. See the example on this operation for the exact shape. */
  data: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DeliveriesResponse3Schema: Schema<ApiV1DeliveriesResponse3> =
  s.object<ApiV1DeliveriesResponse3>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.record(s.string(), s.unknown()),
    },
    { additionalProperties: s.json() },
  );
