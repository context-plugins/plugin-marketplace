import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";
import { verificationMetadataSchema, type VerificationMetadata } from "./verification-metadata.js";

export type Verification = {
  /** The verification state for the document. */
  state: State;
  metadata?: VerificationMetadata;
};

export const verificationSchema: Schema<Verification> = s.object<Verification>({
  state: stateSchema,
  metadata: s.optional(s.lazy(() => verificationMetadataSchema)),
});
