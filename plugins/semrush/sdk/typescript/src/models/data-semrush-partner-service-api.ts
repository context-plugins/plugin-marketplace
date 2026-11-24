import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  viewerActiveProductInternalSchema,
  viewerActiveProductSchema,
  type ViewerActiveProduct,
} from "./viewer-active-product.js";

/** An object describes user status, related to the app */
export type DataSemrushPartnerServiceApi = {
  /** Shows if the app's main product is active */
  isMainProductActive?: boolean;
  /** Shows if the app is taken for free */
  isAppTakenForFree?: boolean;
  /** true if a user can activate trial for app's main product */
  isMainProductTrialAvailable?: boolean;
  /** All app's products ids, for which user can activate trial */
  productTrialsAvailable?: string[];
  /** List of user's in-app purchases (bought products) */
  activeProducts?: ViewerActiveProduct[];
  /** Reserved for future use */
  extraUserData?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataSemrushPartnerServiceApiProperties: s.Shape<DataSemrushPartnerServiceApi> = {
  isMainProductActive: s.optional(s.boolean()),
  isAppTakenForFree: s.optional(s.boolean()),
  isMainProductTrialAvailable: s.optional(s.boolean()),
  productTrialsAvailable: s.optional(s.array(s.string())),
  activeProducts: s.optional(s.array(s.lazy(() => viewerActiveProductInternalSchema))),
  extraUserData: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    isMainProductActive: "is_main_product_active",
    isAppTakenForFree: "is_app_taken_for_free",
    isMainProductTrialAvailable: "is_main_product_trial_available",
    productTrialsAvailable: "product_trials_available",
    activeProducts: "active_products",
    extraUserData: "extra_user_data",
  },
};

export const dataSemrushPartnerServiceApiInternalSchema: Schema<DataSemrushPartnerServiceApi> =
  s.object<DataSemrushPartnerServiceApi>(dataSemrushPartnerServiceApiProperties, {
    additionalProperties: s.json(),
  });

export const dataSemrushPartnerServiceApiSchema: Schema<DataSemrushPartnerServiceApi> = s.lazySchema(() =>
  s.object<DataSemrushPartnerServiceApi>(
    {
      ...dataSemrushPartnerServiceApiProperties,
      activeProducts: s.optional(s.array(s.lazy(() => viewerActiveProductSchema)).check(s.minLength(0))),
    },
    { additionalProperties: s.json() },
  ),
);
