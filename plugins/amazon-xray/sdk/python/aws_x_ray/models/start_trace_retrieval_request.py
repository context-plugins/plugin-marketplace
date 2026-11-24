from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class StartTraceRetrievalRequest(SdkBaseModel):
    trace_ids: list[str] = Field(alias="TraceIds")
    """Specify the trace IDs of the traces to be retrieved."""

    start_time: RFC3339DateTime = Field(alias="StartTime")
    """The start of the time range to retrieve traces. The range is inclusive, so the specified start time is included
    in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC."""

    end_time: RFC3339DateTime = Field(alias="EndTime")
    """The end of the time range to retrieve traces. The range is inclusive, so the specified end time is included in
    the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC."""


class StartTraceRetrievalRequestDict(TypedDict):
    trace_ids: list[str]
    start_time: RFC3339DateTime
    end_time: RFC3339DateTime
