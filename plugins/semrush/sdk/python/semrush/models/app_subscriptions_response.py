from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1 import Data1, Data1Dict
from .response_meta import ResponseMeta, ResponseMetaDict


class AppSubscriptionsResponse(SdkBaseModel):
    """Available subscriptions response object"""

    meta: Optional[ResponseMeta] = UNSET
    """Response metadata"""

    data: Optional[Data1] = UNSET
    """An object describes all app subscriptions"""


class AppSubscriptionsResponseDict(TypedDict):
    meta: NotRequired[ResponseMetaDict]
    data: NotRequired[Data1Dict]
