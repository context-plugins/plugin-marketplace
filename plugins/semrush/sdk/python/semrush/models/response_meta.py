from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResponseMeta(SdkBaseModel):
    """Response metadata"""

    success: Optional[bool] = UNSET
    status_code: Optional[int] = UNSET
    request_id: Optional[str] = UNSET


class ResponseMetaDict(TypedDict):
    success: NotRequired[bool]
    status_code: NotRequired[int]
    request_id: NotRequired[str]
