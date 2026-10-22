import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesStreamSignatureDelta = {
  /** Delta type. @default "signature_delta" */
  type?: "signature_delta";
  /** Signature fragment when `type=signature_delta`. */
  signature: string;
};

export const messagesStreamSignatureDeltaSchema: Schema<MessagesStreamSignatureDelta> =
  s.object<MessagesStreamSignatureDelta>({
    type: s.defaulted(s.literal("signature_delta"), "signature_delta"),
    signature: s.string(),
  });
