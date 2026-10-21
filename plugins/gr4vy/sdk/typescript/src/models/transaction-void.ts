import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transaction4Schema, type Transaction4 } from "./transaction4.js";
import { Type78, type78Schema } from "./type78.js";
import { code2Schema, type Code2 } from "./unions/code2.js";
import { rawResponseCodeSchema, type RawResponseCode } from "./unions/raw-response-code.js";
import {
  rawResponseDescriptionSchema,
  type RawResponseDescription,
} from "./unions/raw-response-description.js";
import { voidStatus2Schema, type VoidStatus2 } from "./void-status2.js";

export type TransactionVoid = {
  /** Always `transaction-void`. @default Type78.TransactionVoid */
  type?: Type78;
  /** The status of the void call. */
  status: VoidStatus2;
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
  /** The transaction associated to this void. */
  transaction: Transaction4;
};

export const transactionVoidSchema: Schema<TransactionVoid> = s.object<TransactionVoid>({
  type: s.defaulted(type78Schema, Type78.TransactionVoid),
  status: voidStatus2Schema,
  code: code2Schema,
  rawResponseCode: rawResponseCodeSchema,
  rawResponseDescription: rawResponseDescriptionSchema,
  transaction: transaction4Schema,
  _keysMap: {
    rawResponseCode: "raw_response_code",
    rawResponseDescription: "raw_response_description",
  },
});
