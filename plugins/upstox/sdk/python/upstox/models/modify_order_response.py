from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .modify_order_data2 import ModifyOrderData2, ModifyOrderData2Dict


class ModifyOrderResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[ModifyOrderData2] = UNSET
    """Response data for modify order request"""


class ModifyOrderResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[ModifyOrderData2Dict]
