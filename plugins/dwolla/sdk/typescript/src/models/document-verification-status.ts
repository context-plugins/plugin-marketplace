import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Verification status of the document after review */
export const DocumentVerificationStatus = {
  Pending: "pending",
  Accepted: "accepted",
  Rejected: "rejected",
} as const;
export type DocumentVerificationStatus =
  | (typeof DocumentVerificationStatus)[keyof typeof DocumentVerificationStatus]
  | (string & {});

export const documentVerificationStatusSchema: EnumSchema<DocumentVerificationStatus> =
  s.enumOf<DocumentVerificationStatus>(DocumentVerificationStatus);
