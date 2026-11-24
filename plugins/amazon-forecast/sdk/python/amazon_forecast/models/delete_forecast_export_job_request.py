from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteForecastExportJobRequest(SdkBaseModel):
    forecast_export_job_arn: str = Field(alias="ForecastExportJobArn")
    """The Amazon Resource Name (ARN) of the forecast export job to delete."""


class DeleteForecastExportJobRequestDict(TypedDict):
    forecast_export_job_arn: str
