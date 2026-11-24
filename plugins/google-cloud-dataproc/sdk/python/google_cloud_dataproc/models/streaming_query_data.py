from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StreamingQueryData(SdkBaseModel):
    """Streaming"""

    end_timestamp: Optional[str] = Field(default=UNSET, alias="endTimestamp")
    streaming_query_id: Optional[str] = Field(default=UNSET, alias="streamingQueryId")
    exception: Optional[str] = UNSET
    start_timestamp: Optional[str] = Field(default=UNSET, alias="startTimestamp")
    run_id: Optional[str] = Field(default=UNSET, alias="runId")
    name: Optional[str] = UNSET
    is_active: Optional[bool] = Field(default=UNSET, alias="isActive")


class StreamingQueryDataDict(TypedDict):
    end_timestamp: NotRequired[str]
    streaming_query_id: NotRequired[str]
    exception: NotRequired[str]
    start_timestamp: NotRequired[str]
    run_id: NotRequired[str]
    name: NotRequired[str]
    is_active: NotRequired[bool]
