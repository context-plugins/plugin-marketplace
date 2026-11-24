from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_destination import DataDestination, DataDestinationDict


class PredictorBacktestExportJobSummary(SdkBaseModel):
    predictor_backtest_export_job_arn: Optional[str] = Field(default=UNSET, alias="PredictorBacktestExportJobArn")
    """The Amazon Resource Name (ARN) of the predictor backtest export job."""

    predictor_backtest_export_job_name: Optional[str] = Field(default=UNSET, alias="PredictorBacktestExportJobName")
    """The name of the predictor backtest export job."""

    destination: Optional[DataDestination] = Field(default=UNSET, alias="Destination")
    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the predictor backtest export job. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
    CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED"""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """Information about any errors that may have occurred during the backtest export."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the predictor backtest export job was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""


class PredictorBacktestExportJobSummaryDict(TypedDict):
    predictor_backtest_export_job_arn: NotRequired[str]
    predictor_backtest_export_job_name: NotRequired[str]
    destination: NotRequired[DataDestinationDict]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
