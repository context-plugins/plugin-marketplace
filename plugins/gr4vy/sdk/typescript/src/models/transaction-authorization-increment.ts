import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incrementalAuthorizationStatus1Schema,
  type IncrementalAuthorizationStatus1,
} from "./incremental-authorization-status1.js";
import { transaction1Schema, type Transaction1 } from "./transaction1.js";
import { Type73, type73Schema } from "./type73.js";
import { code2Schema, type Code2 } from "./unions/code2.js";
import { rawResponseCodeSchema, type RawResponseCode } from "./unions/raw-response-code.js";
import {
  rawResponseDescriptionSchema,
  type RawResponseDescription,
} from "./unions/raw-response-description.js";

export type TransactionAuthorizationIncrement = {
  /**
   * Always `transaction-authorization-increment`.
   *
   * @default Type73.TransactionAuthorizationIncrement
   */
  type?: Type73;
  /** The status of the incremental authorization. */
  status: IncrementalAuthorizationStatus1;
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
  /** The transaction associated to this incremental authorization. */
  transaction: Transaction1;
};

export const transactionAuthorizationIncrementSchema: Schema<TransactionAuthorizationIncrement> =
  s.object<TransactionAuthorizationIncrement>({
    type: s.defaulted(type73Schema, Type73.TransactionAuthorizationIncrement),
    status: incrementalAuthorizationStatus1Schema,
    code: code2Schema,
    rawResponseCode: rawResponseCodeSchema,
    rawResponseDescription: rawResponseDescriptionSchema,
    transaction: transaction1Schema,
    _keysMap: {
      rawResponseCode: "raw_response_code",
      rawResponseDescription: "raw_response_description",
    },
  });
