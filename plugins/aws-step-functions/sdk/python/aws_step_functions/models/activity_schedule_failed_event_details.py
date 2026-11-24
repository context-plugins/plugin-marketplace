from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActivityScheduleFailedEventDetails(SdkBaseModel):
    error: Optional[str] = UNSET
    """The error code of the failure."""

    cause: Optional[str] = UNSET
    """A more detailed explanation of the cause of the failure."""


class ActivityScheduleFailedEventDetailsDict(TypedDict):
    error: NotRequired[str]
    cause: NotRequired[str]
