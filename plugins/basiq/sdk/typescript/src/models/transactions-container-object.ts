import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data9Schema, type Data9 } from "./data9.js";

/**
 * A transaction object is created whenever money is debited or credited from a particular account.
 */
export type TransactionsContainerObject = {
  /** Value is "list". */
  type: string;
  /** Count of the transactions in the response. */
  count: number;
  /** Size of the transactions in the response. */
  size: number;
  data: Data9[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionsContainerObjectSchema: Schema<TransactionsContainerObject> =
  s.object<TransactionsContainerObject>(
    {
      type: s.string(),
      count: s.int(),
      size: s.int(),
      data: s.array(s.lazy(() => data9Schema)),
    },
    { additionalProperties: s.json() },
  );
