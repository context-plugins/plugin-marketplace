import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorBlockInternalSchema, errorBlockSchema, type ErrorBlock } from "./error-block.js";

export type ErrorEnvelope2 = {
  /** @default "False" */
  ok?: "False";
  requestId: string;
  /**
   * Every failure carries this block. Branch on code (a stable string) or number (a stable integer
   * whose thousands digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9
   * ours; 5xxx means retry with backoff). At most one of retry_with, details, issues is present.
   * Failures are never charged.
   */
  error: ErrorBlock;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorEnvelope2Properties: s.Shape<ErrorEnvelope2> = {
  ok: s.defaulted(s.literal("False"), "False"),
  requestId: s.string(),
  error: errorBlockInternalSchema,
  _keysMap: {
    requestId: "request_id",
  },
};

export const errorEnvelope2InternalSchema: Schema<ErrorEnvelope2> = s.object<ErrorEnvelope2>(
  errorEnvelope2Properties,
  { additionalProperties: s.json() },
);

export const errorEnvelope2Schema: Schema<ErrorEnvelope2> = s.lazySchema(() =>
  s.object<ErrorEnvelope2>(
    {
      ...errorEnvelope2Properties,
      error: errorBlockSchema,
    },
    { additionalProperties: s.json() },
  ),
);
