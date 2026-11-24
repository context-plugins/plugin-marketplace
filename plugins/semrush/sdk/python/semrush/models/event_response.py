from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data import Data, DataDict
from .response_meta import ResponseMeta, ResponseMetaDict


class EventResponse(SdkBaseModel):
    """Create event response object"""

    meta: Optional[ResponseMeta] = UNSET
    """Response metadata"""

    data: Optional[Data] = UNSET
    """Event status response"""


class EventResponseDict(TypedDict):
    meta: NotRequired[ResponseMetaDict]
    data: NotRequired[DataDict]
