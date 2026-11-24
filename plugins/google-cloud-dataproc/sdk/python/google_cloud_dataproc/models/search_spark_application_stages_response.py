from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stage_data import StageData, StageDataDict


class SearchSparkApplicationStagesResponse(SdkBaseModel):
    """A list of stages associated with a Spark Application."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSparkApplicationStages."""

    spark_application_stages: Optional[list[StageData]] = Field(default=UNSET, alias="sparkApplicationStages")
    """Output only. Data corresponding to a stage."""


class SearchSparkApplicationStagesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    spark_application_stages: NotRequired[list[StageDataDict]]
