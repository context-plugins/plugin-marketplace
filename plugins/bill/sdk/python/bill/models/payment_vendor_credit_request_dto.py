from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaymentVendorCreditRequestDto(SdkBaseModel):
    """Payment vendor credit request DTO."""

    id: str
    """BILL-generated ID of the vendor credit applied to the bill payment. The value begins with ``vcr``."""

    amount: float
    """Credit amount"""


class PaymentVendorCreditRequestDtoDict(TypedDict):
    id: str
    amount: float
