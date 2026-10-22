import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  merchantAccountThreeDsConfigurationSchema,
  type MerchantAccountThreeDsConfiguration,
} from "./merchant-account-three-ds-configuration.js";

export type MerchantAccountThreeDsConfigurations = {
  /** A list of items returned for this request. */
  items: MerchantAccountThreeDsConfiguration[];
};

export const merchantAccountThreeDsConfigurationsSchema: Schema<MerchantAccountThreeDsConfigurations> =
  s.object<MerchantAccountThreeDsConfigurations>({
    items: s.array(s.lazy(() => merchantAccountThreeDsConfigurationSchema)),
  });
