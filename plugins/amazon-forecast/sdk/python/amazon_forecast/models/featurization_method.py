from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FeaturizationMethod(SdkBaseModel):
    featurization_method_name: Literal["filling"] = Field(default="filling", alias="FeaturizationMethodName")
    """The name of the method. The "filling" method is the only supported method."""

    featurization_method_parameters: Optional[dict[str, str]] = Field(
        default=UNSET, alias="FeaturizationMethodParameters"
    )
    """The method parameters (key-value pairs), which are a map of override parameters. Specify these parameters to
    override the default values. Related Time Series attributes do not accept aggregation parameters. The following list
    shows the parameters and their valid values for the "filling" featurization method for a Target Time Series dataset.
    Bold signifies the default value. aggregation: sum, avg, first, min, max frontfill: none middlefill: zero, nan (not
    a number), value, median, mean, min, max backfill: zero, nan, value, median, mean, min, max The following list shows
    the parameters and their"""


class FeaturizationMethodDict(TypedDict):
    featurization_method_name: Literal["filling"]
    featurization_method_parameters: NotRequired[dict[str, str]]
