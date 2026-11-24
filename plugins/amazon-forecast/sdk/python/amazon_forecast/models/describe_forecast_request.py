from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeForecastRequest(SdkBaseModel):
    forecast_arn: str = Field(alias="ForecastArn")
    """The Amazon Resource Name (ARN) of the forecast."""


class DescribeForecastRequestDict(TypedDict):
    forecast_arn: str
