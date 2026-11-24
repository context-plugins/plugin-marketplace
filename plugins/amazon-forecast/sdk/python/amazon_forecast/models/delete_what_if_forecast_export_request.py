from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteWhatIfForecastExportRequest(SdkBaseModel):
    what_if_forecast_export_arn: str = Field(alias="WhatIfForecastExportArn")
    """The Amazon Resource Name (ARN) of the what-if forecast export that you want to delete."""


class DeleteWhatIfForecastExportRequestDict(TypedDict):
    what_if_forecast_export_arn: str
