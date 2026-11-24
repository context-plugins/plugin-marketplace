from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeWhatIfForecastExportRequest(SdkBaseModel):
    what_if_forecast_export_arn: str = Field(alias="WhatIfForecastExportArn")
    """The Amazon Resource Name (ARN) of the what-if forecast export that you are interested in."""


class DescribeWhatIfForecastExportRequestDict(TypedDict):
    what_if_forecast_export_arn: str
