import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { renewalPolicySchema, type RenewalPolicy } from "./renewal-policy.js";
import { status1DoiTContractsApiSchema, type Status1DoiTContractsApi } from "./status1-doi-tcontracts-api.js";
import { versionInternalSchema, versionSchema, type Version } from "./version.js";

/** A single contract with its version terms. DoiT-internal fields are not exposed. */
export type MtsContractDetailResponse = {
  /** The unique identifier of the contract. */
  id?: string;
  /** The customer (tenant) that holds the contract. */
  customerId?: string;
  /** The immutable contract type. */
  type?: string;
  /** The contract status. */
  status?: Status1DoiTContractsApi;
  /** The contract name. */
  name?: string;
  /** The contract start date. */
  startDate?: Date | null;
  /** The contract end date. */
  endDate?: Date | null;
  /** The renewal policy. */
  renewalPolicy?: RenewalPolicy;
  /** Whether DoiT generates invoices for this contract. */
  doitInvoicingEnabled?: boolean;
  /** The current version number of the contract. */
  currentVersionNumber?: number | null;
  /** When the contract was created. */
  timeCreated?: Date;
  /** The contract versions, newest last, with their billing terms. */
  versions?: Version[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mtsContractDetailResponseProperties: s.Shape<MtsContractDetailResponse> = {
  id: s.optional(s.string()),
  customerId: s.optional(s.string()),
  type: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1DoiTContractsApiSchema)),
  name: s.optional(s.string()),
  startDate: s.optionalNullable(s.dateTime()),
  endDate: s.optionalNullable(s.dateTime()),
  renewalPolicy: s.optional(s.lazy(() => renewalPolicySchema)),
  doitInvoicingEnabled: s.optional(s.boolean()),
  currentVersionNumber: s.optionalNullable(s.int()),
  timeCreated: s.optional(s.dateTime()),
  versions: s.optional(s.array(s.lazy(() => versionInternalSchema))),
};

export const mtsContractDetailResponseInternalSchema: Schema<MtsContractDetailResponse> =
  s.object<MtsContractDetailResponse>(mtsContractDetailResponseProperties, {
    additionalProperties: s.json(),
  });

export const mtsContractDetailResponseSchema: Schema<MtsContractDetailResponse> = s.lazySchema(() =>
  s.object<MtsContractDetailResponse>(
    {
      ...mtsContractDetailResponseProperties,
      versions: s.optional(s.array(s.lazy(() => versionSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
