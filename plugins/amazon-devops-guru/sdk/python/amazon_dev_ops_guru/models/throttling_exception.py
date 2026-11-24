from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ThrottlingException(SdkBaseModel):
    message: str = Field(alias="Message")
    quota_code: Optional[str] = Field(default=UNSET, alias="QuotaCode")
    """The code of the quota that was exceeded, causing the throttling exception."""

    service_code: Optional[str] = Field(default=UNSET, alias="ServiceCode")
    """The code of the service that caused the throttling exception."""

    retry_after_seconds: Optional[int] = Field(default=UNSET, alias="RetryAfterSeconds")
    """The number of seconds after which the action that caused the throttling exception can be retried."""


class ThrottlingExceptionDict(TypedDict):
    message: str
    quota_code: NotRequired[str]
    service_code: NotRequired[str]
    retry_after_seconds: NotRequired[int]
