from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ThrottlingExceptionError(SdkBaseModel):
    retry_after_seconds: Optional[int] = Field(default=UNSET, alias="retryAfterSeconds")
    """The number of seconds after which the user can invoke the API again."""

    message: Optional[str] = UNSET


class ThrottlingExceptionErrorDict(TypedDict):
    retry_after_seconds: NotRequired[int]
    message: NotRequired[str]
