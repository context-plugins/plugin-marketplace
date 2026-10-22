import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listEntityUnmatchedCreditTransferSchema,
  type ListEntityUnmatchedCreditTransfer,
} from "./list-entity-unmatched-credit-transfer.js";

export type Embedded18 = {
  /** An array of unmatched credit transfer objects. */
  unmatchedCreditTransfers: ListEntityUnmatchedCreditTransfer[];
};

export const embedded18Schema: Schema<Embedded18> = s.object<Embedded18>({
  unmatchedCreditTransfers: s.array(s.lazy(() => listEntityUnmatchedCreditTransferSchema)),
  _keysMap: {
    unmatchedCreditTransfers: "unmatched-credit-transfers",
  },
});
