from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_destination import DataDestination, DataDestinationDict


class WhatIfForecastExportSummary(SdkBaseModel):
    what_if_forecast_export_arn: Optional[str] = Field(default=UNSET, alias="WhatIfForecastExportArn")
    """The Amazon Resource Name (ARN) of the what-if forecast export."""

    what_if_forecast_arns: Optional[list[str]] = Field(default=UNSET, alias="WhatIfForecastArns")
    """An array of Amazon Resource Names (ARNs) that define the what-if forecasts included in the export."""

    what_if_forecast_export_name: Optional[str] = Field(default=UNSET, alias="WhatIfForecastExportName")
    """The what-if forecast export name."""

    destination: Optional[DataDestination] = Field(default=UNSET, alias="Destination")
    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the what-if forecast export. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
    CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the
    what-if analysis must be ACTIVE before you can access the analysis."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """If an error occurred, an informational message about the error."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the what-if forecast export was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""


class WhatIfForecastExportSummaryDict(TypedDict):
    what_if_forecast_export_arn: NotRequired[str]
    what_if_forecast_arns: NotRequired[list[str]]
    what_if_forecast_export_name: NotRequired[str]
    destination: NotRequired[DataDestinationDict]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
