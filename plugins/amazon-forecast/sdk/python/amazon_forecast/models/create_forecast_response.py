from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateForecastResponse(SdkBaseModel):
    forecast_arn: Optional[str] = Field(default=UNSET, alias="ForecastArn")
    """The Amazon Resource Name (ARN) of the forecast."""


class CreateForecastResponseDict(TypedDict):
    forecast_arn: NotRequired[str]
