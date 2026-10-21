import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionConnectionOptionsSchema,
  type TransactionConnectionOptions,
} from "../transaction-connection-options.js";

/**
 * Allows for passing optional configuration per connection to take advantage of connection specific
 * features. When provided, the data is only passed to the target connection type to prevent sharing
 * configuration across connections. Please note that each of the keys this object are in
 * kebab-case, for example `cybersource-anti-fraud` as they represent the ID of the connector. All
 * the other keys will be snake case, for example `merchant_defined_data` or camel case to match an
 * external API that the connector uses.
 */
export type ConnectionOptions2 = TransactionConnectionOptions;

export const connectionOptions2Schema: Schema<ConnectionOptions2> = s.of<ConnectionOptions2>(
  s.union([s.lazy(() => transactionConnectionOptionsSchema)]),
);
