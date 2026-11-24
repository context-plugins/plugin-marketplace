from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .executor_stage_summary import ExecutorStageSummary, ExecutorStageSummaryDict


class SearchSparkApplicationExecutorStageSummaryResponse(SdkBaseModel):
    """List of Executors associated with a Spark Application Stage."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSparkApplicationExecutorsListRequest."""

    spark_application_stage_executors: Optional[list[ExecutorStageSummary]] = Field(
        default=UNSET, alias="sparkApplicationStageExecutors"
    )
    """Details about executors used by the application stage."""


class SearchSparkApplicationExecutorStageSummaryResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    spark_application_stage_executors: NotRequired[list[ExecutorStageSummaryDict]]
