from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bad_request_detail import BadRequestDetail, BadRequestDetailDict
from .enums.reason import ReasonOrStr


class BadRequestException(SdkBaseModel):
    message: Optional[str] = UNSET
    reason: Optional[ReasonOrStr] = UNSET
    detail: Optional[BadRequestDetail] = UNSET


class BadRequestExceptionDict(TypedDict):
    message: NotRequired[str]
    reason: NotRequired[ReasonOrStr]
    detail: NotRequired[BadRequestDetailDict]
