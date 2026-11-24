from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateForecastExportJobResponse(SdkBaseModel):
    forecast_export_job_arn: Optional[str] = Field(default=UNSET, alias="ForecastExportJobArn")
    """The Amazon Resource Name (ARN) of the export job."""


class CreateForecastExportJobResponseDict(TypedDict):
    forecast_export_job_arn: NotRequired[str]
