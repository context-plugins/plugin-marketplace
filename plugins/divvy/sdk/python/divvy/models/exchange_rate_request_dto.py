from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExchangeRateRequestDto(SdkBaseModel):
    """DTO for exchange rate request."""

    vendor_id: str = Field(alias="vendorId")
    """BILL-generated ID of the international vendor to be paid. The value begins with ``009``."""

    amount: float
    """Payment amount. The amount is in the vendor bill currency."""


class ExchangeRateRequestDtoDict(TypedDict):
    vendor_id: str
    amount: float
