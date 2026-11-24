from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .discount import Discount, DiscountDict
from .enums.fee_type import FeeTypeOrStr


class Fee(SdkBaseModel):
    name: str
    """(mandatory) - Name of the fee."""

    fee_type: FeeTypeOrStr = Field(alias="feeType")
    """(mandatory) - The type of fee."""

    amount: Optional[str] = UNSET
    """(conditional) - The amount charged for the fee."""

    balance_rate: Optional[str] = Field(default=UNSET, alias="balanceRate")
    """A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and
    accruedRate is mandatory unless the feeType "VARIABLE" is supplied."""

    transaction_rate: Optional[str] = Field(default=UNSET, alias="transactionRate")
    """A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and
    accruedRate is mandatory unless the feeType "VARIABLE" is supplied."""

    accrued_rate: Optional[str] = Field(default=UNSET, alias="accruedRate")
    """A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount,
    balanceRate, transactionRate and accruedRate is mandatory unless the feeType "VARIABLE" is supplied."""

    accrual_frequency: Optional[str] = Field(default=UNSET, alias="accrualFrequency")
    """(optional) - The indicative frequency with which the fee is calculated on the account."""

    currency: Optional[str] = UNSET
    """The currency the fee will be charged in. Assumes AUD if absent."""

    additional_value: Optional[str] = Field(default=UNSET, alias="additionalValue")
    """Display text providing more information on the fee."""

    additional_info: Optional[str] = Field(default=UNSET, alias="additionalInfo")
    """Display text providing more information on the fee."""

    additional_info_uri: Optional[str] = Field(default=UNSET, alias="additionalInfoUri")
    """Link to a web page with more information on this fee."""

    discounts: OptionalNullable[list[Discount]] = UNSET


class FeeDict(TypedDict):
    name: str
    fee_type: FeeTypeOrStr
    amount: NotRequired[str]
    balance_rate: NotRequired[str]
    transaction_rate: NotRequired[str]
    accrued_rate: NotRequired[str]
    accrual_frequency: NotRequired[str]
    currency: NotRequired[str]
    additional_value: NotRequired[str]
    additional_info: NotRequired[str]
    additional_info_uri: NotRequired[str]
    discounts: NotRequired[list[DiscountDict] | None]
