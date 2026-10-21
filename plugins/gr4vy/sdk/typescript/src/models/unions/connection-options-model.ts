import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payoutConnectionOptionsSchema, type PayoutConnectionOptions } from "../payout-connection-options.js";

/** Optional fields for processing payouts on specific payment services. */
export type ConnectionOptionsModel = PayoutConnectionOptions;

export const connectionOptionsModelSchema: Schema<ConnectionOptionsModel> = s.of<ConnectionOptionsModel>(
  s.union([s.lazy(() => payoutConnectionOptionsSchema)]),
);
