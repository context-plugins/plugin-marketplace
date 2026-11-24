from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateWhatIfForecastExportResponse(SdkBaseModel):
    what_if_forecast_export_arn: Optional[str] = Field(default=UNSET, alias="WhatIfForecastExportArn")
    """The Amazon Resource Name (ARN) of the what-if forecast."""


class CreateWhatIfForecastExportResponseDict(TypedDict):
    what_if_forecast_export_arn: NotRequired[str]
