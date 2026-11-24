from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudWatchEventsExecutionDataDetails(SdkBaseModel):
    included: Optional[bool] = UNSET
    """Indicates whether input or output was included in the response. Always true for API calls."""


class CloudWatchEventsExecutionDataDetailsDict(TypedDict):
    included: NotRequired[bool]
