import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferSchemeTypeResponseSchema,
  type TransferSchemeTypeResponse,
} from "./transfer-scheme-type-response.js";

/** The scheme, as requested by the client. */
export type TransferSchemeResponse = {
  /**
   * The transfer scheme to be used for the transfer. The transfer scheme determines the processing
   * time and method of the transfer.
   */
  type: TransferSchemeTypeResponse;
};

export const transferSchemeResponseSchema: Schema<TransferSchemeResponse> = s.object<TransferSchemeResponse>({
  type: transferSchemeTypeResponseSchema,
});
