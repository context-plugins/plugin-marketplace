from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ModifyOrderData(SdkBaseModel):
    order_id: Optional[str] = UNSET
    """Order ID"""


class ModifyOrderDataDict(TypedDict):
    order_id: NotRequired[str]
