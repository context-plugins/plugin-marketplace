import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Overall signing status of the document.
 *
 * Possible values:
 *   - **OPEN** At least one user has not signed or declined their signature yet.
 *   - **DECLINED** At least one user declined to sign. The signature request failed.
 *   - **WITHDRAWN** The owner has withdrawn the signature request.
 *   - **SIGNED** All users signed the document. The signature request was successfully completed.
 *   - **EXPIRED** The owner-set `expires_at` date has passed before all signers signed. Terminal
 *     status.
 *   - **ERROR** A technical error occurred. The signature request cannot be completed.
 */
export const SignatureStatusOverallSkribbleSignatureAttachmentApi = {
  Open: "OPEN",
  Declined: "DECLINED",
  Withdrawn: "WITHDRAWN",
  Signed: "SIGNED",
  Expired: "EXPIRED",
  Error: "ERROR",
} as const;
export type SignatureStatusOverallSkribbleSignatureAttachmentApi =
  | (typeof SignatureStatusOverallSkribbleSignatureAttachmentApi)[keyof typeof SignatureStatusOverallSkribbleSignatureAttachmentApi]
  | (string & {});

export const signatureStatusOverallSkribbleSignatureAttachmentApiSchema: EnumSchema<SignatureStatusOverallSkribbleSignatureAttachmentApi> =
  s.enumOf<SignatureStatusOverallSkribbleSignatureAttachmentApi>(
    SignatureStatusOverallSkribbleSignatureAttachmentApi,
  );
