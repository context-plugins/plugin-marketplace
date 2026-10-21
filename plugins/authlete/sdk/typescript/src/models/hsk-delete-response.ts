import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action28Schema, type Action28 } from "./action28.js";
import { hskSchema, type Hsk } from "./hsk.js";

export type HskDeleteResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** Result of the API call */
  action?: Action28;
  /** Holds information about a key managed in an HSM (Hardware Security Module) */
  hsk?: Hsk;
};

export const hskDeleteResponseSchema: Schema<HskDeleteResponse> = s.object<HskDeleteResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action28Schema)),
  hsk: s.optional(s.lazy(() => hskSchema)),
});
