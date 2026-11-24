import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the company relates to the event. `principal` (subject, acquirer, target, investor, issuer,
 * partner) is the default set; `peripheral` (advisor, speaker, passing mention) appears only when
 * `include_peripheral=true`. Always present.
 */
export const AssociationTierNordicFinancialNewsEventsApi = {
  Principal: "principal",
  Peripheral: "peripheral",
} as const;
export type AssociationTierNordicFinancialNewsEventsApi =
  | (typeof AssociationTierNordicFinancialNewsEventsApi)[keyof typeof AssociationTierNordicFinancialNewsEventsApi]
  | (string & {});

export const associationTierNordicFinancialNewsEventsApiSchema: EnumSchema<AssociationTierNordicFinancialNewsEventsApi> =
  s.enumOf<AssociationTierNordicFinancialNewsEventsApi>(AssociationTierNordicFinancialNewsEventsApi);
