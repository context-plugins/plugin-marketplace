from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HistoryEventExecutionDataDetails(SdkBaseModel):
    truncated: Optional[bool] = UNSET
    """Indicates whether input or output was truncated in the response. Always false for API calls. In CloudWatch logs,
    the value will be true if the data is truncated due to size limits."""


class HistoryEventExecutionDataDetailsDict(TypedDict):
    truncated: NotRequired[bool]
