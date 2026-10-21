import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessJustificationSchema, type BusinessJustification } from "./business-justification.js";

/** Settings that govern usage limit increase requests. */
export type PlatformLimitIncreaseRequestSettings = {
  /** Whether a business justification is required when requesting a usage limit increase. */
  businessJustification: BusinessJustification;
};

export const platformLimitIncreaseRequestSettingsSchema: Schema<PlatformLimitIncreaseRequestSettings> =
  s.object<PlatformLimitIncreaseRequestSettings>({
    businessJustification: businessJustificationSchema,
    _keysMap: {
      businessJustification: "business_justification",
    },
  });
