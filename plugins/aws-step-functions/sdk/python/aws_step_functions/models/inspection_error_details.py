from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InspectionErrorDetails(SdkBaseModel):
    catch_index: Optional[int] = Field(default=UNSET, alias="catchIndex")
    """The array index of the Catch which handled the exception."""

    retry_index: Optional[int] = Field(default=UNSET, alias="retryIndex")
    """The array index of the Retry which handled the exception."""

    retry_backoff_interval_seconds: Optional[int] = Field(default=UNSET, alias="retryBackoffIntervalSeconds")
    """The duration in seconds of the backoff for a retry on a failed state invocation."""


class InspectionErrorDetailsDict(TypedDict):
    catch_index: NotRequired[int]
    retry_index: NotRequired[int]
    retry_backoff_interval_seconds: NotRequired[int]
