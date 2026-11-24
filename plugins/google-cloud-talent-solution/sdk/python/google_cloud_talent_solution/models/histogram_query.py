from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HistogramQuery(SdkBaseModel):
    """The histogram request."""

    histogram_query: Optional[str] = Field(default=UNSET, alias="histogramQuery")
    """An expression specifies a histogram request against matching jobs for searches. See
    SearchJobsRequest.histogram_queries for details about syntax."""


class HistogramQueryDict(TypedDict):
    histogram_query: NotRequired[str]
