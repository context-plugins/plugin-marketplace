from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class EventRetryDto(SdkBaseModel):
    """Event notification retry attempts information."""

    attempt_number: Optional[int] = Field(default=UNSET, alias="attemptNumber")
    """Event notification retry attempt number"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Event notification retry created date and time"""

    status_code: Optional[int] = Field(default=UNSET, alias="statusCode")
    """HTTP status code received from the notification URL"""


class EventRetryDtoDict(TypedDict):
    attempt_number: NotRequired[int]
    created_time: NotRequired[RFC3339DateTime]
    status_code: NotRequired[int]
