import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addendaSchema, type Addenda } from "./addenda.js";
import { companyEntryDescriptionSchema, type CompanyEntryDescription } from "./company-entry-description.js";

/** Information sent to the destination/receiving bank account along with the transfer */
export type Destination = {
  /** Contains addenda information for the transfer */
  addenda?: Addenda;
  /**
   * Beneficiary of the transaction's name. In general, should match the user onboarded to the
   * Platform's name
   */
  beneficiaryName?: string;
  /** Describes the purpose of the transaction */
  companyEntryDescription?: CompanyEntryDescription;
  /** Numeric identifier of originator */
  companyId?: string;
  /** Name of the originator */
  companyName?: string;
  /**
   * The date when the ACH transaction becomes effective, formatted as YYYY-MM-DD. This is typically
   * the settlement date for the transaction
   */
  effectiveDate?: string;
  /**
   * Suggested memo line format for bank statements, structured as
   * companyName:companyDiscretionaryData:beneficiaryName
   */
  postingData?: string;
  /**
   * Routing number of Originating Depository Financial Institution (ODFI). Identifies the financial
   * institution that originated the ACH transaction
   */
  routingNumber?: string;
  /**
   * A unique identifier for tracing the ACH transaction through the banking network. Used for
   * transaction tracking and reconciliation purposes
   */
  traceId?: string;
};

export const destinationSchema: Schema<Destination> = s.object<Destination>({
  addenda: s.optional(s.lazy(() => addendaSchema)),
  beneficiaryName: s.optional(s.string()),
  companyEntryDescription: s.optional(s.lazy(() => companyEntryDescriptionSchema)),
  companyId: s.optional(s.string()),
  companyName: s.optional(s.string()),
  effectiveDate: s.optional(s.dateOnly()),
  postingData: s.optional(s.string()),
  routingNumber: s.optional(s.string()),
  traceId: s.optional(s.string()),
});
