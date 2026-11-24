from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classifications_bill_v3_recurringbills_api import (
    ClassificationsBillV3RecurringbillsApi,
    ClassificationsBillV3RecurringbillsApiDict,
)


class VendorCreditLineItemResponseDto(SdkBaseModel):
    """Vendor Credit Create Request Line Item."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the vendor credit line item. The value begins with ``vci``."""

    description: Optional[str] = UNSET
    """Vendor credit line item description"""

    amount: Optional[float] = UNSET
    """Vendor credit line item amount. For a vendor credit in an international currency (not USD), this value is in the
    local currency."""

    classifications: Optional[ClassificationsBillV3RecurringbillsApi] = UNSET


class VendorCreditLineItemResponseDtoDict(TypedDict):
    id: NotRequired[str]
    description: NotRequired[str]
    amount: NotRequired[float]
    classifications: NotRequired[ClassificationsBillV3RecurringbillsApiDict]
