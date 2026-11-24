from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason3 import Reason3OrStr


class ServiceQuotaExceededException(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")
    reason: Optional[Reason3OrStr] = Field(default=UNSET, alias="Reason")
    """The reason for the exception."""


class ServiceQuotaExceededExceptionDict(TypedDict):
    message: NotRequired[str]
    reason: NotRequired[Reason3OrStr]
