from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteForecastRequest(SdkBaseModel):
    forecast_arn: str = Field(alias="ForecastArn")
    """The Amazon Resource Name (ARN) of the forecast to delete."""


class DeleteForecastRequestDict(TypedDict):
    forecast_arn: str
