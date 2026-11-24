import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Activity = {
  GeneralCommerce: "general_commerce",
  SellPrescriptionDrugs: "sell_prescription_drugs",
  ManufactureDrugs: "manufacture_drugs",
  SellMedicalDevices: "sell_medical_devices",
  HaulFreight: "haul_freight",
  BrokerFreight: "broker_freight",
  SellAlcohol: "sell_alcohol",
  ProduceSpirits: "produce_spirits",
  ProvideInvestmentAdvice: "provide_investment_advice",
  AcceptDeposits: "accept_deposits",
  Lend: "lend",
  BillMedicareMedicaid: "bill_medicare_medicaid",
  HealthcareSupplier: "healthcare_supplier",
  FederalContracting: "federal_contracting",
  CharitableSolicitation: "charitable_solicitation",
  Construction: "construction",
  OperatePsilocybinHealingCenter: "operate_psilocybin_healing_center",
} as const;
export type Activity = (typeof Activity)[keyof typeof Activity] | (string & {});

export const activitySchema: EnumSchema<Activity> = s.enumOf<Activity>(Activity);
