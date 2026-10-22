import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refreshsplittokenSchema, type Refreshsplittoken } from "./unions/refreshsplittoken.js";

export type TrustlyOptions = {
  /** Indicates to Gr4vy whether or not the stored Trustly agreement needs refreshing. */
  refreshSplitToken?: Refreshsplittoken;
};

export const trustlyOptionsSchema: Schema<TrustlyOptions> = s.object<TrustlyOptions>({
  refreshSplitToken: s.optional(s.lazy(() => refreshsplittokenSchema)),
});
