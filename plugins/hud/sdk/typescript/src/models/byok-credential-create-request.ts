import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

export type ByokCredentialCreateRequest = {
  providerId: number;
  scope: Scope;
  value: string;
};

export const byokCredentialCreateRequestSchema: Schema<ByokCredentialCreateRequest> =
  s.object<ByokCredentialCreateRequest>({
    providerId: s.int(),
    scope: scopeSchema,
    value: s.string(),
    _keysMap: {
      providerId: "provider_id",
    },
  });
