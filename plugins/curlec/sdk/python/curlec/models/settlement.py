from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_razorpay_settlements_api import EntityRazorpaySettlementsApiOrStr
from .enums.status_razorpay_settlements_api import StatusRazorpaySettlementsApiOrStr


class Settlement(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique settlement identifier. Prefix: setl_"""

    entity: Optional[EntityRazorpaySettlementsApiOrStr] = UNSET
    amount: Optional[int] = UNSET
    """Settlement amount in paise."""

    status: Optional[StatusRazorpaySettlementsApiOrStr] = UNSET
    fees: Optional[int] = UNSET
    """Processing fees charged (typically 0 for normal settlements)."""

    tax: Optional[int] = UNSET
    """Tax on fees (paise)."""

    utr: Optional[str] = UNSET
    """Unique Transaction Reference (UTR) number for bank tracking."""

    created_at: Optional[int] = UNSET


class SettlementDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpaySettlementsApiOrStr]
    amount: NotRequired[int]
    status: NotRequired[StatusRazorpaySettlementsApiOrStr]
    fees: NotRequired[int]
    tax: NotRequired[int]
    utr: NotRequired[str]
    created_at: NotRequired[int]
