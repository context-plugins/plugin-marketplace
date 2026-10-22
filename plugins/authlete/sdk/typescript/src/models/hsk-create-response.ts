import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action27Schema, type Action27 } from "./action27.js";
import { hskSchema, type Hsk } from "./hsk.js";

export type HskCreateResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** Result of the API call. */
  action?: Action27;
  /** Holds information about a key managed in an HSM (Hardware Security Module) */
  hsk?: Hsk;
};

export const hskCreateResponseSchema: Schema<HskCreateResponse> = s.object<HskCreateResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action27Schema)),
  hsk: s.optional(s.lazy(() => hskSchema)),
});
