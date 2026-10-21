import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityBalanceTransferResponseSchema,
  type EntityBalanceTransferResponse,
} from "./entity-balance-transfer-response.js";

export type Embedded16 = {
  /** A list of Connect balance transfers. */
  connectBalanceTransfers: EntityBalanceTransferResponse[];
};

export const embedded16Schema: Schema<Embedded16> = s.object<Embedded16>({
  connectBalanceTransfers: s.array(s.lazy(() => entityBalanceTransferResponseSchema)),
  _keysMap: {
    connectBalanceTransfers: "connect_balance_transfers",
  },
});
