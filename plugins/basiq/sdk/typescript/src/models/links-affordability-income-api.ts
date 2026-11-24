import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksAffordabilityIncomeApi = {
  /** Links of accounts */
  accounts: string[];
  /** Link to the requested income resource */
  self: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksAffordabilityIncomeApiSchema: Schema<LinksAffordabilityIncomeApi> =
  s.object<LinksAffordabilityIncomeApi>(
    {
      accounts: s.array(s.string()),
      self: s.string(),
    },
    { additionalProperties: s.json() },
  );
