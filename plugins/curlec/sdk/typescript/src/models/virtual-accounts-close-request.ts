import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VirtualAccountsCloseRequest = {
  /** Must be 'closed' to close the account. @default "closed" */
  status?: "closed";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualAccountsCloseRequestSchema: Schema<VirtualAccountsCloseRequest> =
  s.object<VirtualAccountsCloseRequest>(
    {
      status: s.defaulted(s.literal("closed"), "closed"),
    },
    { additionalProperties: s.json() },
  );
