from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LimitExceededExceptionError(SdkBaseModel):
    retry_after_seconds: Optional[str] = Field(default=UNSET, alias="retryAfterSeconds")
    message: Optional[str] = UNSET


class LimitExceededExceptionErrorDict(TypedDict):
    retry_after_seconds: NotRequired[str]
    message: NotRequired[str]
