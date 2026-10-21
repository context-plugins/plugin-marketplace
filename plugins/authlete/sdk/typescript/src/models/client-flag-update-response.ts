import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientFlagUpdateResponse = {
  /** The code which represents the result of the API call. */
  resultCode: string;
  /** A short message which explains the result of the API call. */
  resultMessage: string;
};

export const clientFlagUpdateResponseSchema: Schema<ClientFlagUpdateResponse> =
  s.object<ClientFlagUpdateResponse>({
    resultCode: s.string(),
    resultMessage: s.string(),
  });
