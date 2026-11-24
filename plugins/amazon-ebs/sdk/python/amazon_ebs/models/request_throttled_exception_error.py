from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason1 import Reason1OrStr


class RequestThrottledExceptionError(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")
    reason: Optional[Reason1OrStr] = Field(default=UNSET, alias="Reason")
    """The reason for the exception."""


class RequestThrottledExceptionErrorDict(TypedDict):
    message: NotRequired[str]
    reason: NotRequired[Reason1OrStr]
