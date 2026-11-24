import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RedriveExecutionInput = {
  /** The Amazon Resource Name (ARN) of the execution to be redriven. */
  executionArn: string;
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * If you don’t specify a client token, the Amazon Web Services SDK automatically generates a
   * client token and uses it for the request to ensure idempotency. The API will return idempotent
   * responses for the last 10 client tokens used to successfully redrive the execution. These
   * client tokens are valid for up to 15 minutes after they are first used.
   */
  clientToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const redriveExecutionInputSchema: Schema<RedriveExecutionInput> = s.object<RedriveExecutionInput>(
  {
    executionArn: s.string(),
    clientToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
