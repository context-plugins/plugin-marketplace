import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountTypeDynamics365BusinessCentralApiV20JournalsApiSchema,
  type AccountTypeDynamics365BusinessCentralApiV20JournalsApi,
} from "./account-type-dynamics365-business-central-api-v20-journals-api.js";

export type JournalLine = {
  id?: string;
  journalId?: string;
  journalDisplayName?: string;
  lineNumber?: number;
  accountType?: AccountTypeDynamics365BusinessCentralApiV20JournalsApi;
  accountId?: string;
  accountNumber?: string;
  postingDate?: string;
  documentNumber?: string;
  externalDocumentNumber?: string;
  amount?: number;
  description?: string;
  comment?: string;
  taxCode?: string;
  balanceAccountType?: string;
  balanceAccountNumber?: string;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const journalLineProperties: s.Shape<JournalLine> = {
  id: s.optional(s.string()),
  journalId: s.optional(s.string()),
  journalDisplayName: s.optional(s.string()),
  lineNumber: s.optional(s.int()),
  accountType: s.optional(s.lazy(() => accountTypeDynamics365BusinessCentralApiV20JournalsApiSchema)),
  accountId: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  postingDate: s.optional(s.dateOnly()),
  documentNumber: s.optional(s.string()),
  externalDocumentNumber: s.optional(s.string()),
  amount: s.optional(s.float64()),
  description: s.optional(s.string()),
  comment: s.optional(s.string()),
  taxCode: s.optional(s.string()),
  balanceAccountType: s.optional(s.string()),
  balanceAccountNumber: s.optional(s.string()),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const journalLineInternalSchema: Schema<JournalLine> = s.object<JournalLine>(journalLineProperties, {
  additionalProperties: s.json(),
});

export const journalLineSchema: Schema<JournalLine> = s.lazySchema(() =>
  s.object<JournalLine>(
    {
      ...journalLineProperties,
      journalDisplayName: s.optional(s.string().check(s.maxLength(100))),
      accountNumber: s.optional(s.string().check(s.maxLength(20))),
      documentNumber: s.optional(s.string().check(s.maxLength(20))),
      externalDocumentNumber: s.optional(s.string().check(s.maxLength(35))),
      description: s.optional(s.string().check(s.maxLength(100))),
      taxCode: s.optional(s.string().check(s.maxLength(20))),
      balanceAccountNumber: s.optional(s.string().check(s.maxLength(20))),
    },
    { additionalProperties: s.json() },
  ),
);
