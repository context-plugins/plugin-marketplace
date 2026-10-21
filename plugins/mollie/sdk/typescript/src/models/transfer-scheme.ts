import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSchemeTypeSchema, type TransferSchemeType } from "./transfer-scheme-type.js";

/** The scheme, as requested by the client. */
export type TransferScheme = {
  /**
   * The transfer scheme to be used for the transfer. The transfer scheme determines the processing
   * time and method of the transfer.
   */
  type: TransferSchemeType;
};

export const transferSchemeSchema: Schema<TransferScheme> = s.object<TransferScheme>({
  type: transferSchemeTypeSchema,
});
