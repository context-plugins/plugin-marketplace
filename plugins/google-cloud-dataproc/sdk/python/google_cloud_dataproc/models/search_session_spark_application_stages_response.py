from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stage_data import StageData, StageDataDict


class SearchSessionSparkApplicationStagesResponse(SdkBaseModel):
    """A list of stages associated with a Spark Application."""

    spark_application_stages: Optional[list[StageData]] = Field(default=UNSET, alias="sparkApplicationStages")
    """Output only. Data corresponding to a stage."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSessionSparkApplicationStages."""


class SearchSessionSparkApplicationStagesResponseDict(TypedDict):
    spark_application_stages: NotRequired[list[StageDataDict]]
    next_page_token: NotRequired[str]
