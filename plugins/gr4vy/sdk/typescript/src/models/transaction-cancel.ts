import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancelStatus1Schema, type CancelStatus1 } from "./cancel-status1.js";
import { transaction2Schema, type Transaction2 } from "./transaction2.js";
import { Type74, type74Schema } from "./type74.js";
import { code2Schema, type Code2 } from "./unions/code2.js";
import { rawResponseCodeSchema, type RawResponseCode } from "./unions/raw-response-code.js";
import {
  rawResponseDescriptionSchema,
  type RawResponseDescription,
} from "./unions/raw-response-description.js";

export type TransactionCancel = {
  /** Always `transaction-cancel`. @default Type74.TransactionCancel */
  type?: Type74;
  /** The status of the cancel call. */
  status: CancelStatus1;
  /** The standardized error code set by Gr4vy. */
  code: Code2;
  /**
   * This is the response code received from the payment service. This can be set to any value and
   * is not standardized across different payment services.
   */
  rawResponseCode: RawResponseCode;
  /**
   * This is the response description received from the payment service. This can be set to any
   * value and is not standardized across different payment services.
   */
  rawResponseDescription: RawResponseDescription;
  /** The transaction associated to this cancel. */
  transaction: Transaction2;
};

export const transactionCancelSchema: Schema<TransactionCancel> = s.object<TransactionCancel>({
  type: s.defaulted(type74Schema, Type74.TransactionCancel),
  status: cancelStatus1Schema,
  code: code2Schema,
  rawResponseCode: rawResponseCodeSchema,
  rawResponseDescription: rawResponseDescriptionSchema,
  transaction: transaction2Schema,
  _keysMap: {
    rawResponseCode: "raw_response_code",
    rawResponseDescription: "raw_response_description",
  },
});
