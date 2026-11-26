from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .amount_range import AmountRange, AmountRangeDict
from .enums.currency_code import CurrencyCodeOrStr


class ExchangeRateListResponseDto(SdkBaseModel):
    """Exchange Rate Response DTO."""

    bill_currency: Optional[CurrencyCodeOrStr] = Field(default=UNSET, alias="billCurrency")
    payment_currency: Optional[CurrencyCodeOrStr] = Field(default=UNSET, alias="paymentCurrency")
    base_currency: Optional[CurrencyCodeOrStr] = Field(default=UNSET, alias="baseCurrency")
    exchange_rate: Optional[float] = Field(default=UNSET, alias="exchangeRate")
    """Exchange rate. This rate compares the organization's base currency and the vendor ``paymentCurrency`` value.

    For example, if the organization's base currency is USD and the vendor ``paymentCurrency`` is CAD, an
    ``exchangeRate`` of ``1.372`` tells us that ``1 USD = 1.372 CAD``."""

    vendor_id: Optional[str] = Field(default=UNSET, alias="vendorId")
    """BILL-generated ID of the international vendor"""

    amount_range: Optional[AmountRange] = Field(default=UNSET, alias="amountRange")
    expiration_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expirationTime")
    """Exchange rate batch expiration date and time"""


class ExchangeRateListResponseDtoDict(TypedDict):
    bill_currency: NotRequired[CurrencyCodeOrStr]
    payment_currency: NotRequired[CurrencyCodeOrStr]
    base_currency: NotRequired[CurrencyCodeOrStr]
    exchange_rate: NotRequired[float]
    vendor_id: NotRequired[str]
    amount_range: NotRequired[AmountRangeDict]
    expiration_time: NotRequired[RFC3339DateTime]
