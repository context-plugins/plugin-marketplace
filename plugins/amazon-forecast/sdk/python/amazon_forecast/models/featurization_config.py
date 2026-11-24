from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .featurization import Featurization, FeaturizationDict


class FeaturizationConfig(SdkBaseModel):
    forecast_frequency: str = Field(alias="ForecastFrequency")
    """The frequency of predictions in a forecast. Valid intervals are an integer followed by Y (Year), M (Month), W
    (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15
    minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you
    cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency
    are the following: Minute - 1-59 Hour - 1-23 Day - 1-6 Week - 1-4 Month - 1-11 Year - 1 Thus, if you want every
    other week forecasts, specify "2"""

    forecast_dimensions: Optional[list[str]] = Field(default=UNSET, alias="ForecastDimensions")
    """An array of dimension (field) names that specify how to group the generated forecast. For example, suppose that
    you are generating a forecast for item sales across all of your stores, and your dataset contains a store_id field.
    If you want the sales forecast for each item by store, you would specify store_id as the dimension. All forecast
    dimensions specified in the TARGET_TIME_SERIES dataset don't need to be specified in the CreatePredictor request.
    All forecast dimensions specified in the RELATED_TIME_SERIES dataset must be specified in the CreatePredictor
    request."""

    featurizations: Optional[list[Featurization]] = Field(default=UNSET, alias="Featurizations")
    """An array of featurization (transformation) information for the fields of a dataset."""


class FeaturizationConfigDict(TypedDict):
    forecast_frequency: str
    forecast_dimensions: NotRequired[list[str]]
    featurizations: NotRequired[list[FeaturizationDict]]
