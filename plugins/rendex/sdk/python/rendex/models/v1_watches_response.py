from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .response_meta import ResponseMeta, ResponseMetaDict
from .watch import Watch, WatchDict


class V1WatchesResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[Watch] = UNSET
    """A monitoring configuration. webhookUrl is redacted to its host on read."""

    meta: Optional[ResponseMeta] = UNSET


class V1WatchesResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[WatchDict]
    meta: NotRequired[ResponseMetaDict]
