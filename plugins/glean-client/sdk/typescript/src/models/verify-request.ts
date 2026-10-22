import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action2Schema, type Action2 } from "./action2.js";

export type VerifyRequest = {
  /** The document which is verified. */
  documentId: string;
  /** The verification action requested. */
  action?: Action2;
};

export const verifyRequestSchema: Schema<VerifyRequest> = s.object<VerifyRequest>({
  documentId: s.string(),
  action: s.optional(s.lazy(() => action2Schema)),
});
