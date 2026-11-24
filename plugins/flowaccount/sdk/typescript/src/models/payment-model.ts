import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deductionTypeSchema, type DeductionType } from "./deduction-type.js";
import { entitySchema, type Entity } from "./entity.js";
import { incomeTypeSchema, type IncomeType } from "./income-type.js";
import { paymentMethodSchema, type PaymentMethod } from "./payment-method.js";
import { remainingCollectedTypeSchema, type RemainingCollectedType } from "./remaining-collected-type.js";

export type PaymentModel = {
  cashRemarks?: string | null;
  excludeVat?: number;
  cashTax?: number;
  creditCardNumber?: string | null;
  companyVatRate?: number;
  net?: number;
  bankAccountNumber?: string | null;
  bankAccountId?: number | null;
  /**
   * 0 = None 1 = Cash 3 = Cheque 5 = Transfer 7 = CreditCard 9 = PushPay 11 = PettyCash 13 = Other
   * 51 = TransferByKConnect
   */
  paymentMethod?: PaymentMethod;
  dateNow?: Date;
  amountCollected?: number;
  amountWithheld?: number;
  withholdingTax?: number | null;
  remarks?: string | null;
  transferBankAccountId?: number | null;
  bankAccountCreditCardId?: number | null;
  charge?: number;
  chequeDate?: Date | null;
  chequeNumber?: string | null;
  chequeBankAccountId?: string | null;
  creditCardBankAccountId?: string | null;
  remainingCollected?: number | null;
  remainingCollectedType?: RemainingCollectedType;
  deductionAmount?: number | null;
  paymentDeductionType?: DeductionType;
  pettyCashName?: string | null;
  pettyCashId?: number | null;
  chequeId?: number | null;
  creditCardId?: number | null;
  otherChannelId?: number | null;
  chequeDepositDate?: Date | null;
  chequeDepositBankId?: number | null;
  chequeCashingDate?: Date | null;
  autoCreateWithholdingTax?: boolean;
  /**
   * 1 = Salary 3 = Commission 5 = Licensing 7 = Interest 9 = NetProfit30 11 = NetProfit25 13 =
   * NetProfit20 15 = NetProfitOther 17 = TaxExemption 19 = DividenFromShareOfProfit 21 =
   * PortionOfNetProfit 23 = RecognitionOfProfit 25 = TaxOther 27 = RevenueDepartmentTax 29 = Others
   */
  withholdingTaxIncomeType?: IncomeType;
  withholdingTaxIncomeDescription?: string | null;
  /** 1 = PND3 3 = PND53 5 = PND1K 7 = PND1KSpecial 9 = PND2 11 = PND2K 13 = PND3K 15 = PND1 */
  withholdingTaxEntity?: Entity;
  exchangeRateFee?: number | null;
};

export const paymentModelSchema: Schema<PaymentModel> = s.object<PaymentModel>({
  cashRemarks: s.optionalNullable(s.string()),
  excludeVat: s.optional(s.float64()),
  cashTax: s.optional(s.int()),
  creditCardNumber: s.optionalNullable(s.string()),
  companyVatRate: s.optional(s.int()),
  net: s.optional(s.float64()),
  bankAccountNumber: s.optionalNullable(s.string()),
  bankAccountId: s.optionalNullable(s.int()),
  paymentMethod: s.optional(s.lazy(() => paymentMethodSchema)),
  dateNow: s.optional(s.dateTime()),
  amountCollected: s.optional(s.float64()),
  amountWithheld: s.optional(s.float64()),
  withholdingTax: s.optionalNullable(s.float64()),
  remarks: s.optionalNullable(s.string()),
  transferBankAccountId: s.optionalNullable(s.int()),
  bankAccountCreditCardId: s.optionalNullable(s.int()),
  charge: s.optional(s.float64()),
  chequeDate: s.optionalNullable(s.dateTime()),
  chequeNumber: s.optionalNullable(s.string()),
  chequeBankAccountId: s.optionalNullable(s.string()),
  creditCardBankAccountId: s.optionalNullable(s.string()),
  remainingCollected: s.optionalNullable(s.float64()),
  remainingCollectedType: s.optional(s.lazy(() => remainingCollectedTypeSchema)),
  deductionAmount: s.optionalNullable(s.float64()),
  paymentDeductionType: s.optional(s.lazy(() => deductionTypeSchema)),
  pettyCashName: s.optionalNullable(s.string()),
  pettyCashId: s.optionalNullable(s.int()),
  chequeId: s.optionalNullable(s.int()),
  creditCardId: s.optionalNullable(s.int()),
  otherChannelId: s.optionalNullable(s.int()),
  chequeDepositDate: s.optionalNullable(s.dateTime()),
  chequeDepositBankId: s.optionalNullable(s.int()),
  chequeCashingDate: s.optionalNullable(s.dateTime()),
  autoCreateWithholdingTax: s.optional(s.boolean()),
  withholdingTaxIncomeType: s.optional(s.lazy(() => incomeTypeSchema)),
  withholdingTaxIncomeDescription: s.optionalNullable(s.string()),
  withholdingTaxEntity: s.optional(s.lazy(() => entitySchema)),
  exchangeRateFee: s.optionalNullable(s.float64()),
});
