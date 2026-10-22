import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action30Schema, type Action30 } from "./action30.js";
import { hskSchema, type Hsk } from "./hsk.js";

export type HskGetListResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** Result of the API call */
  action?: Action30;
  /** List of HSK */
  hsks?: Hsk[];
};

export const hskGetListResponseSchema: Schema<HskGetListResponse> = s.object<HskGetListResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action30Schema)),
  hsks: s.optional(s.array(s.lazy(() => hskSchema))),
});
