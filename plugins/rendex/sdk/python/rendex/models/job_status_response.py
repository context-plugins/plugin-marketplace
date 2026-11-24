from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1 import Data1, Data1Dict
from .response_meta import ResponseMeta, ResponseMetaDict


class JobStatusResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[Data1] = UNSET
    meta: Optional[ResponseMeta] = UNSET


class JobStatusResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[Data1Dict]
    meta: NotRequired[ResponseMetaDict]
