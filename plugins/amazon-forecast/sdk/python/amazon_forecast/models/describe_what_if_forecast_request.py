from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeWhatIfForecastRequest(SdkBaseModel):
    what_if_forecast_arn: str = Field(alias="WhatIfForecastArn")
    """The Amazon Resource Name (ARN) of the what-if forecast that you are interested in."""


class DescribeWhatIfForecastRequestDict(TypedDict):
    what_if_forecast_arn: str
