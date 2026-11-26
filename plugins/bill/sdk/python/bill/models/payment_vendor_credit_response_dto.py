from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaymentVendorCreditResponseDto(SdkBaseModel):
    """Payment vendor credit response DTO."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the vendor credit applied to the bill payment. The value begins with ``vcr``."""

    amount: Optional[float] = UNSET
    """Credit amount"""


class PaymentVendorCreditResponseDtoDict(TypedDict):
    id: NotRequired[str]
    amount: NotRequired[float]
