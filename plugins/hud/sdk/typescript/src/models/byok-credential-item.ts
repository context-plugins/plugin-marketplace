import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

export type ByokCredentialItem = {
  id: string;
  providerId: number;
  providerName: string;
  name: string;
  scope: Scope;
  maskedValue: string;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const byokCredentialItemSchema: Schema<ByokCredentialItem> = s.object<ByokCredentialItem>(
  {
    id: s.string(),
    providerId: s.int(),
    providerName: s.string(),
    name: s.string(),
    scope: scopeSchema,
    maskedValue: s.string(),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    _keysMap: {
      providerId: "provider_id",
      providerName: "provider_name",
      maskedValue: "masked_value",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
