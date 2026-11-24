from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConcurrentLimitExceededException(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")


class ConcurrentLimitExceededExceptionDict(TypedDict):
    message: NotRequired[str]
