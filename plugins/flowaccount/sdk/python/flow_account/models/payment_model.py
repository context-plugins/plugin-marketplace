from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.deduction_type import DeductionTypeOrInt
from .enums.entity import EntityOrInt
from .enums.income_type import IncomeTypeOrInt
from .enums.payment_method import PaymentMethodOrInt
from .enums.remaining_collected_type import RemainingCollectedTypeOrInt


class PaymentModel(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    cash_remarks: OptionalNullable[str] = Field(default=UNSET, alias="cashRemarks")
    exclude_vat: Optional[float] = Field(default=UNSET, alias="excludeVat")
    cash_tax: Optional[int] = Field(default=UNSET, alias="cashTax")
    credit_card_number: OptionalNullable[str] = Field(default=UNSET, alias="creditCardNumber")
    company_vat_rate: Optional[int] = Field(default=UNSET, alias="companyVatRate")
    net: Optional[float] = UNSET
    bank_account_number: OptionalNullable[str] = Field(default=UNSET, alias="bankAccountNumber")
    bank_account_id: OptionalNullable[int] = Field(default=UNSET, alias="bankAccountId")
    payment_method: Optional[PaymentMethodOrInt] = Field(default=UNSET, alias="paymentMethod")
    """0 = None 1 = Cash 3 = Cheque 5 = Transfer 7 = CreditCard 9 = PushPay 11 = PettyCash 13 = Other 51 =
    TransferByKConnect"""

    date_now: Optional[RFC3339DateTime] = Field(default=UNSET, alias="dateNow")
    amount_collected: Optional[float] = Field(default=UNSET, alias="amountCollected")
    amount_withheld: Optional[float] = Field(default=UNSET, alias="amountWithheld")
    withholding_tax: OptionalNullable[float] = Field(default=UNSET, alias="withholdingTax")
    remarks: OptionalNullable[str] = UNSET
    transfer_bank_account_id: OptionalNullable[int] = Field(default=UNSET, alias="transferBankAccountId")
    bank_account_credit_card_id: OptionalNullable[int] = Field(default=UNSET, alias="bankAccountCreditCardId")
    charge: Optional[float] = UNSET
    cheque_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="chequeDate")
    cheque_number: OptionalNullable[str] = Field(default=UNSET, alias="chequeNumber")
    cheque_bank_account_id: OptionalNullable[str] = Field(default=UNSET, alias="chequeBankAccountId")
    credit_card_bank_account_id: OptionalNullable[str] = Field(default=UNSET, alias="creditCardBankAccountId")
    remaining_collected: OptionalNullable[float] = Field(default=UNSET, alias="remainingCollected")
    remaining_collected_type: Optional[RemainingCollectedTypeOrInt] = Field(
        default=UNSET, alias="remainingCollectedType"
    )
    deduction_amount: OptionalNullable[float] = Field(default=UNSET, alias="deductionAmount")
    payment_deduction_type: Optional[DeductionTypeOrInt] = Field(default=UNSET, alias="paymentDeductionType")
    petty_cash_name: OptionalNullable[str] = Field(default=UNSET, alias="pettyCashName")
    petty_cash_id: OptionalNullable[int] = Field(default=UNSET, alias="pettyCashId")
    cheque_id: OptionalNullable[int] = Field(default=UNSET, alias="chequeId")
    credit_card_id: OptionalNullable[int] = Field(default=UNSET, alias="creditCardId")
    other_channel_id: OptionalNullable[int] = Field(default=UNSET, alias="otherChannelId")
    cheque_deposit_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="chequeDepositDate")
    cheque_deposit_bank_id: OptionalNullable[int] = Field(default=UNSET, alias="chequeDepositBankId")
    cheque_cashing_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="chequeCashingDate")
    auto_create_withholding_tax: Optional[bool] = Field(default=UNSET, alias="autoCreateWithholdingTax")
    withholding_tax_income_type: Optional[IncomeTypeOrInt] = Field(default=UNSET, alias="withholdingTaxIncomeType")
    """1 = Salary 3 = Commission 5 = Licensing 7 = Interest 9 = NetProfit30 11 = NetProfit25 13 = NetProfit20 15 =
    NetProfitOther 17 = TaxExemption 19 = DividenFromShareOfProfit 21 = PortionOfNetProfit 23 = RecognitionOfProfit 25 =
    TaxOther 27 = RevenueDepartmentTax 29 = Others"""

    withholding_tax_income_description: OptionalNullable[str] = Field(
        default=UNSET, alias="withholdingTaxIncomeDescription"
    )
    withholding_tax_entity: Optional[EntityOrInt] = Field(default=UNSET, alias="withholdingTaxEntity")
    """1 = PND3 3 = PND53 5 = PND1K 7 = PND1KSpecial 9 = PND2 11 = PND2K 13 = PND3K 15 = PND1"""

    exchange_rate_fee: OptionalNullable[float] = Field(default=UNSET, alias="exchangeRateFee")


class PaymentModelDict(TypedDict):
    cash_remarks: NotRequired[str | None]
    exclude_vat: NotRequired[float]
    cash_tax: NotRequired[int]
    credit_card_number: NotRequired[str | None]
    company_vat_rate: NotRequired[int]
    net: NotRequired[float]
    bank_account_number: NotRequired[str | None]
    bank_account_id: NotRequired[int | None]
    payment_method: NotRequired[PaymentMethodOrInt]
    date_now: NotRequired[RFC3339DateTime]
    amount_collected: NotRequired[float]
    amount_withheld: NotRequired[float]
    withholding_tax: NotRequired[float | None]
    remarks: NotRequired[str | None]
    transfer_bank_account_id: NotRequired[int | None]
    bank_account_credit_card_id: NotRequired[int | None]
    charge: NotRequired[float]
    cheque_date: NotRequired[RFC3339DateTime | None]
    cheque_number: NotRequired[str | None]
    cheque_bank_account_id: NotRequired[str | None]
    credit_card_bank_account_id: NotRequired[str | None]
    remaining_collected: NotRequired[float | None]
    remaining_collected_type: NotRequired[RemainingCollectedTypeOrInt]
    deduction_amount: NotRequired[float | None]
    payment_deduction_type: NotRequired[DeductionTypeOrInt]
    petty_cash_name: NotRequired[str | None]
    petty_cash_id: NotRequired[int | None]
    cheque_id: NotRequired[int | None]
    credit_card_id: NotRequired[int | None]
    other_channel_id: NotRequired[int | None]
    cheque_deposit_date: NotRequired[RFC3339DateTime | None]
    cheque_deposit_bank_id: NotRequired[int | None]
    cheque_cashing_date: NotRequired[RFC3339DateTime | None]
    auto_create_withholding_tax: NotRequired[bool]
    withholding_tax_income_type: NotRequired[IncomeTypeOrInt]
    withholding_tax_income_description: NotRequired[str | None]
    withholding_tax_entity: NotRequired[EntityOrInt]
    exchange_rate_fee: NotRequired[float | None]
