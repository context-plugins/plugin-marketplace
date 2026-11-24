from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IpoCancelData(SdkBaseModel):
    order_id: Optional[str] = UNSET
    """Application id that was cancelled"""

    status: Optional[str] = UNSET
    """Free-text message returned by the IPO service for the cancellation request"""


class IpoCancelDataDict(TypedDict):
    order_id: NotRequired[str]
    status: NotRequired[str]
