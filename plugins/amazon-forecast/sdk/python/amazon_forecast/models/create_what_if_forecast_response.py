from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateWhatIfForecastResponse(SdkBaseModel):
    what_if_forecast_arn: Optional[str] = Field(default=UNSET, alias="WhatIfForecastArn")
    """The Amazon Resource Name (ARN) of the what-if forecast."""


class CreateWhatIfForecastResponseDict(TypedDict):
    what_if_forecast_arn: NotRequired[str]
