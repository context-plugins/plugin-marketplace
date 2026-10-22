import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { definitionFieldSchema, type DefinitionField } from "./definition-field.js";
import { method17Schema, type Method17 } from "./method17.js";
import { mode1Schema, type Mode1 } from "./mode1.js";
import {
  paymentServiceConfiguration1Schema,
  type PaymentServiceConfiguration1,
} from "./payment-service-configuration1.js";
import { requiredCheckoutFieldsSchema, type RequiredCheckoutFields } from "./required-checkout-fields.js";
import { Type56, type56Schema } from "./type56.js";
import { iconUrl2Schema, type IconUrl2 } from "./unions/icon-url2.js";
import {
  supportedIntegrationClientsSchema,
  type SupportedIntegrationClients,
} from "./unions/supported-integration-clients.js";

export type PaymentServiceDefinition = {
  /**
   * The definition ID of the payment service that can be configured. This is the underlying
   * provider followed by a dash followed by the method.
   */
  id: string;
  /** Always `payment-service-definition`. @default Type56.PaymentServiceDefinition */
  type?: Type56;
  /** A human friendly name for this service. */
  displayName: string;
  /** The method of the service */
  method: Method17;
  /** A list of credentials and related fields which can be configured for this service. */
  fields: DefinitionField[];
  /** A list of reporting fields which can be configured for this service. */
  reportingFields: DefinitionField[];
  /** A list of three-letter ISO currency codes that this service supports. */
  supportedCurrencies: string[];
  /** A list of two-letter ISO country codes that this service supports. */
  supportedCountries: string[];
  /** The mode that defines the flow this payment service uses to process a payment. */
  mode: Mode1;
  /** An icon to display for the payment service. */
  iconUrl?: IconUrl2;
  /** Features supported by the payment service. */
  supportedFeatures: Record<string, boolean>;
  /**
   * A list of condition that define when some fields must be provided with a transaction request.
   */
  requiredCheckoutFields: RequiredCheckoutFields[];
  /** Additional configuration on how to present the approval UI. */
  configuration: PaymentServiceConfiguration1;
  /** List of supported integration clients. Defaults to redirect for most redirect connectors. */
  supportedIntegrationClients: SupportedIntegrationClients;
};

export const paymentServiceDefinitionSchema: Schema<PaymentServiceDefinition> =
  s.object<PaymentServiceDefinition>({
    id: s.string(),
    type: s.defaulted(type56Schema, Type56.PaymentServiceDefinition),
    displayName: s.string(),
    method: method17Schema,
    fields: s.array(s.lazy(() => definitionFieldSchema)),
    reportingFields: s.array(s.lazy(() => definitionFieldSchema)),
    supportedCurrencies: s.array(s.string()),
    supportedCountries: s.array(s.string()),
    mode: mode1Schema,
    iconUrl: s.optional(s.lazy(() => iconUrl2Schema)),
    supportedFeatures: s.record(s.string(), s.boolean()),
    requiredCheckoutFields: s.array(s.lazy(() => requiredCheckoutFieldsSchema)),
    configuration: paymentServiceConfiguration1Schema,
    supportedIntegrationClients: supportedIntegrationClientsSchema,
    _keysMap: {
      displayName: "display_name",
      reportingFields: "reporting_fields",
      supportedCurrencies: "supported_currencies",
      supportedCountries: "supported_countries",
      iconUrl: "icon_url",
      supportedFeatures: "supported_features",
      requiredCheckoutFields: "required_checkout_fields",
      supportedIntegrationClients: "supported_integration_clients",
    },
  });
