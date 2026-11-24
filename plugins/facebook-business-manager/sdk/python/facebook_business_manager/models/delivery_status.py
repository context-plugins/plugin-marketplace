from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeliveryStatus(SdkBaseModel):
    status: Optional[int] = UNSET
    """Delivery status code"""


class DeliveryStatusDict(TypedDict):
    status: NotRequired[int]
