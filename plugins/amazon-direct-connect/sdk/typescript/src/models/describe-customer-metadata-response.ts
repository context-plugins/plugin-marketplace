import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerAgreementSchema, type CustomerAgreement } from "./customer-agreement.js";
import { nniPartnerTypeSchema, type NniPartnerType } from "./nni-partner-type.js";

export type DescribeCustomerMetadataResponse = {
  /** The list of customer agreements. */
  agreements?: CustomerAgreement[];
  /**
   * The type of network-to-network interface (NNI) partner. The partner type will be one of the
   * following: V1: This partner can only allocate 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or
   * 500Mbps subgigabit connections. V2: This partner can only allocate 1GB, 2GB, 5GB, or 10GB
   * hosted connections. nonPartner: The customer is not a partner.
   */
  nniPartnerType?: NniPartnerType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCustomerMetadataResponseSchema: Schema<DescribeCustomerMetadataResponse> =
  s.object<DescribeCustomerMetadataResponse>(
    {
      agreements: s.optional(s.array(s.lazy(() => customerAgreementSchema))),
      nniPartnerType: s.optional(s.lazy(() => nniPartnerTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
