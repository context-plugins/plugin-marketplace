from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_destination import DataDestination, DataDestinationDict


class DescribeForecastExportJobResponse(SdkBaseModel):
    forecast_export_job_arn: Optional[str] = Field(default=UNSET, alias="ForecastExportJobArn")
    """The ARN of the forecast export job."""

    forecast_export_job_name: Optional[str] = Field(default=UNSET, alias="ForecastExportJobName")
    """The name of the forecast export job."""

    forecast_arn: Optional[str] = Field(default=UNSET, alias="ForecastArn")
    """The Amazon Resource Name (ARN) of the exported forecast."""

    destination: Optional[DataDestination] = Field(default=UNSET, alias="Destination")
    message: Optional[str] = Field(default=UNSET, alias="Message")
    """If an error occurred, an informational message about the error."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the forecast export job. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the forecast export
    job must be ACTIVE before you can access the forecast in your S3 bucket."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the forecast export job was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""

    format: Optional[str] = Field(default=UNSET, alias="Format")
    """The format of the exported data, CSV or PARQUET."""


class DescribeForecastExportJobResponseDict(TypedDict):
    forecast_export_job_arn: NotRequired[str]
    forecast_export_job_name: NotRequired[str]
    forecast_arn: NotRequired[str]
    destination: NotRequired[DataDestinationDict]
    message: NotRequired[str]
    status: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
    format: NotRequired[str]
