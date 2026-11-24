from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict
from .response_meta import ResponseMeta, ResponseMetaDict


class ErrorResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error] = UNSET
    meta: Optional[ResponseMeta] = UNSET


class ErrorResponseDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[ErrorDict]
    meta: NotRequired[ResponseMetaDict]
