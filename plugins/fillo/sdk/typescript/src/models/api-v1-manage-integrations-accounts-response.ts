import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { provider1Schema, type Provider1 } from "./provider1.js";

export type ApiV1ManageIntegrationsAccountsResponse = {
  /** @default "True" */
  removed?: "True";
  id: string;
  provider: Provider1;
  label: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageIntegrationsAccountsResponseSchema: Schema<ApiV1ManageIntegrationsAccountsResponse> =
  s.object<ApiV1ManageIntegrationsAccountsResponse>(
    {
      removed: s.defaulted(s.literal("True"), "True"),
      id: s.string(),
      provider: provider1Schema,
      label: s.string(),
    },
    { additionalProperties: s.json() },
  );
