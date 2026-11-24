from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stage_data import StageData, StageDataDict


class SearchSessionSparkApplicationStageAttemptsResponse(SdkBaseModel):
    """A list of Stage Attempts for a Stage of a Spark Application."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSessionSparkApplicationStageAttemptsRequest."""

    spark_application_stage_attempts: Optional[list[StageData]] = Field(
        default=UNSET, alias="sparkApplicationStageAttempts"
    )
    """Output only. Data corresponding to a stage attempts"""


class SearchSessionSparkApplicationStageAttemptsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    spark_application_stage_attempts: NotRequired[list[StageDataDict]]
