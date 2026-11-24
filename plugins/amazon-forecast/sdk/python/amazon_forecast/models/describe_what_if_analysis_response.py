from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .time_series_selector import TimeSeriesSelector, TimeSeriesSelectorDict


class DescribeWhatIfAnalysisResponse(SdkBaseModel):
    what_if_analysis_name: Optional[str] = Field(default=UNSET, alias="WhatIfAnalysisName")
    """The name of the what-if analysis."""

    what_if_analysis_arn: Optional[str] = Field(default=UNSET, alias="WhatIfAnalysisArn")
    """The Amazon Resource Name (ARN) of the what-if analysis."""

    forecast_arn: Optional[str] = Field(default=UNSET, alias="ForecastArn")
    """The Amazon Resource Name (ARN) of the what-if forecast."""

    estimated_time_remaining_in_minutes: Optional[int] = Field(default=UNSET, alias="EstimatedTimeRemainingInMinutes")
    """The approximate time remaining to complete the what-if analysis, in minutes."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the what-if analysis. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if analysis
    must be ACTIVE before you can access the analysis."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """If an error occurred, an informational message about the error."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the what-if analysis was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""

    time_series_selector: Optional[TimeSeriesSelector] = Field(default=UNSET, alias="TimeSeriesSelector")


class DescribeWhatIfAnalysisResponseDict(TypedDict):
    what_if_analysis_name: NotRequired[str]
    what_if_analysis_arn: NotRequired[str]
    forecast_arn: NotRequired[str]
    estimated_time_remaining_in_minutes: NotRequired[int]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
    time_series_selector: NotRequired[TimeSeriesSelectorDict]
