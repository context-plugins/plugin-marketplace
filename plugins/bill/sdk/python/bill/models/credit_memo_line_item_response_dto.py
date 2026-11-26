from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classifications_bill_v3_credit_memos_api import (
    ClassificationsBillV3CreditMemosApi,
    ClassificationsBillV3CreditMemosApiDict,
)


class CreditMemoLineItemResponseDto(SdkBaseModel):
    """Credit Memo Create Request Line Item."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the credit memo line item. The value begins with ``cci``."""

    description: Optional[str] = UNSET
    """Credit memo line item description"""

    price: Optional[float] = UNSET
    """Credit memo line item unit price. For a credit memo in an international currency (not USD), this value is in the
    local currency."""

    quantity: Optional[float] = UNSET
    """Credit memo line item unit quantity"""

    amount: Optional[float] = UNSET
    """Credit memo line item amount"""

    rate_percent: Optional[float] = Field(default=UNSET, alias="ratePercent")
    """Credit memo line item rate percent"""

    taxable: Optional[bool] = UNSET
    """Set as ``true`` if the credit memo line item is taxable"""

    classifications: Optional[ClassificationsBillV3CreditMemosApi] = UNSET


class CreditMemoLineItemResponseDtoDict(TypedDict):
    id: NotRequired[str]
    description: NotRequired[str]
    price: NotRequired[float]
    quantity: NotRequired[float]
    amount: NotRequired[float]
    rate_percent: NotRequired[float]
    taxable: NotRequired[bool]
    classifications: NotRequired[ClassificationsBillV3CreditMemosApiDict]
