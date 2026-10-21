import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationSchema, type Verification } from "./verification.js";

export type VerificationFeed = {
  /** List of document infos that include verification related information for them. */
  documents?: Verification[];
};

export const verificationFeedSchema: Schema<VerificationFeed> = s.object<VerificationFeed>({
  documents: s.optional(s.array(s.lazy(() => verificationSchema))),
});
