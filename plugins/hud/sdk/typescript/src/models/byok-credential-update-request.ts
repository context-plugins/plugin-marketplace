import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ByokCredentialUpdateRequest = {
  value: string;
};

export const byokCredentialUpdateRequestSchema: Schema<ByokCredentialUpdateRequest> =
  s.object<ByokCredentialUpdateRequest>({
    value: s.string(),
  });
