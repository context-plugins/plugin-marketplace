from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BillVendorCreditRequestItemDto(SdkBaseModel):
    """API level DTO for apply vendor credit to bill request item."""

    id: str
    """BILL-generated ID of the vendor credit applied to the bill payment. The value begins with ``vcr``."""

    amount: float
    """Credit amount"""


class BillVendorCreditRequestItemDtoDict(TypedDict):
    id: str
    amount: float
