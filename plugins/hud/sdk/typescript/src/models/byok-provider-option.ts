import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ByokProviderOption = {
  providerId: number;
  providerName: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const byokProviderOptionSchema: Schema<ByokProviderOption> = s.object<ByokProviderOption>(
  {
    providerId: s.int(),
    providerName: s.string(),
    name: s.string(),
    _keysMap: {
      providerId: "provider_id",
      providerName: "provider_name",
    },
  },
  { additionalProperties: s.json() },
);
