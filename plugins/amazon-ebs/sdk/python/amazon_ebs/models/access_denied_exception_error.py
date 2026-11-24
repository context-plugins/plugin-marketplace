from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr


class AccessDeniedExceptionError(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")
    reason: ReasonOrStr = Field(alias="Reason")
    """The reason for the exception."""


class AccessDeniedExceptionErrorDict(TypedDict):
    message: NotRequired[str]
    reason: ReasonOrStr
