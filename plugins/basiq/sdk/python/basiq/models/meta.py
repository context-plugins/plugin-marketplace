from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .address import Address, AddressDict
from .credit_card import CreditCard, CreditCardDict
from .deposit_rate import DepositRate, DepositRateDict
from .feature import Feature, FeatureDict
from .fee import Fee, FeeDict
from .lending_rate import LendingRate, LendingRateDict
from .loan import Loan, LoanDict
from .term_deposit import TermDeposit, TermDepositDict


class Meta(SdkBaseModel):
    fees: OptionalNullable[list[Fee]] = UNSET
    deposit_rates: OptionalNullable[list[DepositRate]] = Field(default=UNSET, alias="depositRates")
    lending_rates: OptionalNullable[list[LendingRate]] = Field(default=UNSET, alias="lendingRates")
    term_deposit: Optional[list[TermDeposit]] = Field(default=UNSET, alias="termDeposit")
    loan: OptionalNullable[Loan] = UNSET
    credit_card: Optional[CreditCard] = Field(default=UNSET, alias="creditCard")
    features: OptionalNullable[list[Feature]] = UNSET
    """Array of features available for the product."""

    addresses: OptionalNullable[list[Address]] = UNSET
    """The addresses for the account to be used for correspondence."""


class MetaDict(TypedDict):
    fees: NotRequired[list[FeeDict] | None]
    deposit_rates: NotRequired[list[DepositRateDict] | None]
    lending_rates: NotRequired[list[LendingRateDict] | None]
    term_deposit: NotRequired[list[TermDepositDict]]
    loan: NotRequired[LoanDict | None]
    credit_card: NotRequired[CreditCardDict]
    features: NotRequired[list[FeatureDict] | None]
    addresses: NotRequired[list[AddressDict] | None]
