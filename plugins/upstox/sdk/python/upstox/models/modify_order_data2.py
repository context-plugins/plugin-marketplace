from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ModifyOrderData2(SdkBaseModel):
    """Response data for modify order request"""

    order_id: Optional[str] = UNSET
    """Order ID"""


class ModifyOrderData2Dict(TypedDict):
    order_id: NotRequired[str]
