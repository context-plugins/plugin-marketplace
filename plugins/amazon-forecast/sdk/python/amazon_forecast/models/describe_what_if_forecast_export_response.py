from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_destination import DataDestination, DataDestinationDict


class DescribeWhatIfForecastExportResponse(SdkBaseModel):
    what_if_forecast_export_arn: Optional[str] = Field(default=UNSET, alias="WhatIfForecastExportArn")
    """The Amazon Resource Name (ARN) of the what-if forecast export."""

    what_if_forecast_export_name: Optional[str] = Field(default=UNSET, alias="WhatIfForecastExportName")
    """The name of the what-if forecast export."""

    what_if_forecast_arns: Optional[list[str]] = Field(default=UNSET, alias="WhatIfForecastArns")
    """An array of Amazon Resource Names (ARNs) that represent all of the what-if forecasts exported in this
    resource."""

    destination: Optional[DataDestination] = Field(default=UNSET, alias="Destination")
    message: Optional[str] = Field(default=UNSET, alias="Message")
    """If an error occurred, an informational message about the error."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the what-if forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if forecast
    export must be ACTIVE before you can access the forecast export."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the what-if forecast export was created."""

    estimated_time_remaining_in_minutes: Optional[int] = Field(default=UNSET, alias="EstimatedTimeRemainingInMinutes")
    """The approximate time remaining to complete the what-if forecast export, in minutes."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""

    format: Optional[str] = Field(default=UNSET, alias="Format")
    """The format of the exported data, CSV or PARQUET."""


class DescribeWhatIfForecastExportResponseDict(TypedDict):
    what_if_forecast_export_arn: NotRequired[str]
    what_if_forecast_export_name: NotRequired[str]
    what_if_forecast_arns: NotRequired[list[str]]
    destination: NotRequired[DataDestinationDict]
    message: NotRequired[str]
    status: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    estimated_time_remaining_in_minutes: NotRequired[int]
    last_modification_time: NotRequired[RFC3339DateTime]
    format: NotRequired[str]
