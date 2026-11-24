from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data2 import Data2, Data2Dict
from .response_meta import ResponseMeta, ResponseMetaDict


class AppUserSubscriptionStatusResponse(SdkBaseModel):
    """User subscription status response object"""

    meta: Optional[ResponseMeta] = UNSET
    """Response metadata"""

    data: Optional[Data2] = UNSET
    """An object describes subscription status related to user"""


class AppUserSubscriptionStatusResponseDict(TypedDict):
    meta: NotRequired[ResponseMetaDict]
    data: NotRequired[Data2Dict]
