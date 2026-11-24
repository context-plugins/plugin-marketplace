from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InternalServerException(SdkBaseModel):
    message: str = Field(alias="Message")
    retry_after_seconds: Optional[int] = Field(default=UNSET, alias="RetryAfterSeconds")
    """The number of seconds after which the action that caused the internal server exception can be retried."""


class InternalServerExceptionDict(TypedDict):
    message: str
    retry_after_seconds: NotRequired[int]
