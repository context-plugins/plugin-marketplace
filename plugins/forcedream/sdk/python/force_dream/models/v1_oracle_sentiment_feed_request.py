from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1OracleSentimentFeedRequest(SdkBaseModel):
    resource_id: Optional[str] = UNSET


class V1OracleSentimentFeedRequestDict(TypedDict):
    resource_id: NotRequired[str]
