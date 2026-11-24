import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Name of the step the job needs to complete. */
export const Title = {
  VerifyCredentials: "verify-credentials",
  RetrieveAccounts: "retrieve-accounts",
  RetrieveTransactions: "retrieve-transactions",
  RetrieveStatements: "retrieve-statements",
} as const;
export type Title = (typeof Title)[keyof typeof Title] | (string & {});

export const titleSchema: EnumSchema<Title> = s.enumOf<Title>(Title);
