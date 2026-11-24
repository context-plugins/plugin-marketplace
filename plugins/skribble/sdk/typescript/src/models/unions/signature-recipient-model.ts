import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { groupSignerSchema, type GroupSigner } from "../group-signer.js";
import { userSignerInternalSchema, userSignerSchema, type UserSigner } from "../user-signer.js";

/**
 * Defines a signature recipient which can either be an individual signer or a group signer.
 *
 * - For individual signers, account_email and/or signer_identity_data can optionally be provided.
 * - For group signers, signer_group_id must be provided and account_email/signer_identity_data must
 *   not be used.
 */
export type SignatureRecipientModel = UserSigner | GroupSigner;

export const signatureRecipientModelInternalSchema: Schema<SignatureRecipientModel> =
  s.of<SignatureRecipientModel>(
    s.union([s.lazy(() => userSignerInternalSchema), s.lazy(() => groupSignerSchema)]),
  );

export const signatureRecipientModelSchema: Schema<SignatureRecipientModel> = s.lazySchema(() =>
  s.of<SignatureRecipientModel>(s.union([s.lazy(() => userSignerSchema), s.lazy(() => groupSignerSchema)])),
);
