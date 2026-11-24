import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activationStatusSchema, type ActivationStatus } from "./activation-status.js";
import { activeConfigurationSchema, type ActiveConfiguration } from "./active-configuration.js";
import { productNameSchema, type ProductName } from "./product-name.js";
import { requirementSchema, type Requirement } from "./requirement.js";
import { tncSchema, type Tnc } from "./tnc.js";

/**
 * Route product configuration for a Linked Account. Controls settlement account details and tracks
 * activation status. Prefix: acc_prd_
 */
export type ProductConfiguration = {
  /** Product configuration ID. Prefix: acc_prd_ */
  id?: string;
  /** Linked Account ID this configuration belongs to. */
  accountId?: string;
  /** Product name. Always 'route' for Route product. */
  productName?: ProductName;
  /**
   * Current activation status. Progresses from requested → under_review → activated.
   * needs_clarification requires additional info from the merchant.
   */
  activationStatus?: ActivationStatus;
  tnc?: Tnc;
  /** Configuration details provided during activation request. */
  requestedConfiguration?: Record<string, unknown>;
  activeConfiguration?: ActiveConfiguration;
  /** List of pending requirements needed for activation. */
  requirements?: Requirement[];
  /** Unix timestamp when product was requested. */
  requestedAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productConfigurationSchema: Schema<ProductConfiguration> = s.object<ProductConfiguration>(
  {
    id: s.optional(s.string()),
    accountId: s.optional(s.string()),
    productName: s.optional(s.lazy(() => productNameSchema)),
    activationStatus: s.optional(s.lazy(() => activationStatusSchema)),
    tnc: s.optional(s.lazy(() => tncSchema)),
    requestedConfiguration: s.optional(s.record(s.string(), s.unknown())),
    activeConfiguration: s.optional(s.lazy(() => activeConfigurationSchema)),
    requirements: s.optional(s.array(s.lazy(() => requirementSchema))),
    requestedAt: s.optional(s.int()),
    _keysMap: {
      accountId: "account_id",
      productName: "product_name",
      activationStatus: "activation_status",
      requestedConfiguration: "requested_configuration",
      activeConfiguration: "active_configuration",
      requestedAt: "requested_at",
    },
  },
  { additionalProperties: s.json() },
);
