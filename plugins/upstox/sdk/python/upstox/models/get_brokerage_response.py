from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .brokerage_wrapper_data1 import BrokerageWrapperData1, BrokerageWrapperData1Dict
from .enums.status import StatusOrStr


class GetBrokerageResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[BrokerageWrapperData1] = UNSET
    """Response data for brokerage"""


class GetBrokerageResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[BrokerageWrapperData1Dict]
