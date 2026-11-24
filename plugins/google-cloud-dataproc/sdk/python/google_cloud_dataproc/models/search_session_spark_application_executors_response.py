from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .executor_summary import ExecutorSummary, ExecutorSummaryDict


class SearchSessionSparkApplicationExecutorsResponse(SdkBaseModel):
    """List of Executors associated with a Spark Application."""

    spark_application_executors: Optional[list[ExecutorSummary]] = Field(
        default=UNSET, alias="sparkApplicationExecutors"
    )
    """Details about executors used by the application."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSessionSparkApplicationExecutorsRequest."""


class SearchSessionSparkApplicationExecutorsResponseDict(TypedDict):
    spark_application_executors: NotRequired[list[ExecutorSummaryDict]]
    next_page_token: NotRequired[str]
