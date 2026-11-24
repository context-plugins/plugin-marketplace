from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CancelOrExitMultiOrderData2(SdkBaseModel):
    """Response data for cancel or exit order request"""

    order_ids: Optional[list[str]] = UNSET
    """Reference order IDs"""


class CancelOrExitMultiOrderData2Dict(TypedDict):
    order_ids: NotRequired[list[str]]
