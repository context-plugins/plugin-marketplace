from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason1 import Reason1OrStr
from .invalid_request_detail import InvalidRequestDetail, InvalidRequestDetailDict


class InvalidRequestExceptionError(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")
    reason: Optional[Reason1OrStr] = Field(default=UNSET, alias="Reason")
    detail: Optional[InvalidRequestDetail] = Field(default=UNSET, alias="Detail")


class InvalidRequestExceptionErrorDict(TypedDict):
    message: NotRequired[str]
    reason: NotRequired[Reason1OrStr]
    detail: NotRequired[InvalidRequestDetailDict]
