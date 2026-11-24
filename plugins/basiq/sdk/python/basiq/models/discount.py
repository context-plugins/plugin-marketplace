from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .eligibility import Eligibility, EligibilityDict


class Discount(SdkBaseModel):
    description: str
    """Description of the discount."""

    discount_type: str = Field(alias="discountType")
    """The type of discount. See the next section for an overview of valid values and their meaning."""

    amount: Optional[str] = UNSET
    """Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is
    mandatory."""

    balance_rate: Optional[str] = Field(default=UNSET, alias="balanceRate")
    """A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is
    expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate
    and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the
    same as the corresponding fee."""

    transaction_rate: Optional[str] = Field(default=UNSET, alias="transactionRate")
    """A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is
    expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate
    and feeRate is mandatory."""

    accrued_rate: Optional[str] = Field(default=UNSET, alias="accruedRate")
    """A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the
    currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount,
    balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the
    application and calculation frequency are the same as the corresponding fee."""

    fee_rate: Optional[str] = Field(default=UNSET, alias="feeRate")
    """A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the
    currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount,
    balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the
    application and calculation frequency are the same as the corresponding fee."""

    additional_value: Optional[str] = Field(default=UNSET, alias="additionalValue")
    """Generic field containing additional information relevant to the discountType specified. Whether mandatory or not
    is dependent on the value of discountType."""

    additional_info: Optional[str] = Field(default=UNSET, alias="additionalInfo")
    """Display text providing more information on the discount."""

    additional_info_uri: Optional[str] = Field(default=UNSET, alias="additionalInfoUri")
    """Link to a web page with more information on this discount."""

    eligibility: Optional[list[Eligibility]] = UNSET
    """Eligibility constraints that apply to this discount. Mandatory if discountType is ELIGIBILITY_ONLY."""


class DiscountDict(TypedDict):
    description: str
    discount_type: str
    amount: NotRequired[str]
    balance_rate: NotRequired[str]
    transaction_rate: NotRequired[str]
    accrued_rate: NotRequired[str]
    fee_rate: NotRequired[str]
    additional_value: NotRequired[str]
    additional_info: NotRequired[str]
    additional_info_uri: NotRequired[str]
    eligibility: NotRequired[list[EligibilityDict]]
