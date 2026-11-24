from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict
from .time_series_selector import TimeSeriesSelector, TimeSeriesSelectorDict


class CreateForecastRequest(SdkBaseModel):
    forecast_name: str = Field(alias="ForecastName")
    """A name for the forecast."""

    predictor_arn: str = Field(alias="PredictorArn")
    """The Amazon Resource Name (ARN) of the predictor to use to generate the forecast."""

    forecast_types: Optional[list[str]] = Field(default=UNSET, alias="ForecastTypes")
    """The quantiles at which probabilistic forecasts are generated. You can currently specify up to 5 quantiles per
    forecast. Accepted values include 0.01 to 0.99 (increments of .01 only) and mean. The mean forecast is different
    from the median (0.50) when the distribution is not symmetric (for example, Beta and Negative Binomial). The default
    quantiles are the quantiles you specified during predictor creation. If you didn't specify quantiles, the default
    values are ["0.1", "0.5", "0.9"]."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The optional metadata that you apply to the forecast to help you categorize and organize them. Each tag consists
    of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum
    number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one
    value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8.
    If your tagging schema is used across multiple services and resources, remember that other services may have
    restrictions on allowed charac"""

    time_series_selector: Optional[TimeSeriesSelector] = Field(default=UNSET, alias="TimeSeriesSelector")


class CreateForecastRequestDict(TypedDict):
    forecast_name: str
    predictor_arn: str
    forecast_types: NotRequired[list[str]]
    tags: NotRequired[list[TagModelDict]]
    time_series_selector: NotRequired[TimeSeriesSelectorDict]
