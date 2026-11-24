from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.condition_amazon_forecast_service_what_if_forecast_api import (
    ConditionAmazonForecastServiceWhatIfForecastApiOrStr,
)


class TimeSeriesCondition(SdkBaseModel):
    attribute_name: str = Field(alias="AttributeName")
    """The item_id, dimension name, IM name, or timestamp that you are modifying."""

    attribute_value: str = Field(alias="AttributeValue")
    """The value that is applied for the chosen Condition."""

    condition: ConditionAmazonForecastServiceWhatIfForecastApiOrStr = Field(alias="Condition")
    """The condition to apply. Valid values are EQUALS, NOT_EQUALS, LESS_THAN and GREATER_THAN."""


class TimeSeriesConditionDict(TypedDict):
    attribute_name: str
    attribute_value: str
    condition: ConditionAmazonForecastServiceWhatIfForecastApiOrStr
