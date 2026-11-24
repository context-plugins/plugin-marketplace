import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksAffordabilityExpensesApi = {
  /** Links of accounts */
  accounts: string[];
  /** Link to the requested expenses resource */
  self: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksAffordabilityExpensesApiSchema: Schema<LinksAffordabilityExpensesApi> =
  s.object<LinksAffordabilityExpensesApi>(
    {
      accounts: s.array(s.string()),
      self: s.string(),
    },
    { additionalProperties: s.json() },
  );
