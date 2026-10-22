import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MetricsExplorerModule = {
  AuthenticationOutcome: "authentication_outcome",
  Authorized: "authorized",
  Country: "country",
  Currency: "currency",
  ErrorCode: "error_code",
  InstrumentType: "instrument_type",
  IsSubsequentPayment: "is_subsequent_payment",
  LiabilityShifted: "liability_shifted",
  MerchantInitiated: "merchant_initiated",
  Metadata: "metadata",
  Method: "method",
  PaymentMethodBin: "payment_method_bin",
  PaymentMethodCardIssuerName: "payment_method_card_issuer_name",
  PaymentMethodCardType: "payment_method_card_type",
  PaymentMethodCountry: "payment_method_country",
  PaymentMethodScheme: "payment_method_scheme",
  PaymentService: "payment_service",
  PaymentSource: "payment_source",
  RawResponseCode: "raw_response_code",
  RuleRouteTransaction: "rule_route_transaction",
  RuleSkip3Ds: "rule_skip_3ds",
  RuleVariantId: "rule_variant_id",
  ThreeDSecureAuthResp: "three_d_secure_auth_resp",
  ThreeDSecureEci: "three_d_secure_eci",
  ThreeDSecureMethod: "three_d_secure_method",
} as const;
export type MetricsExplorerModule =
  | (typeof MetricsExplorerModule)[keyof typeof MetricsExplorerModule]
  | (string & {});

export const metricsExplorerModuleSchema: EnumSchema<MetricsExplorerModule> =
  s.enumOf<MetricsExplorerModule>(MetricsExplorerModule);
