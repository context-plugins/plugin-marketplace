import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { provider1Schema, type Provider1 } from "./provider1.js";

export type Account = {
  id: string;
  provider: Provider1;
  /** The account's display name — also the exact value a removal must confirm with. */
  label: string;
  /** True when the key's project currently uses this account. */
  selected: boolean;
  projectCount: number;
  formDestinationCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountSchema: Schema<Account> = s.object<Account>(
  {
    id: s.string(),
    provider: provider1Schema,
    label: s.string(),
    selected: s.boolean(),
    projectCount: s.int(),
    formDestinationCount: s.int(),
  },
  { additionalProperties: s.json() },
);
