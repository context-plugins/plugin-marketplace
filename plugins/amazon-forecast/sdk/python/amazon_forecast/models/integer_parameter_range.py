from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scaling_type1 import ScalingType1OrStr


class IntegerParameterRange(SdkBaseModel):
    name: str = Field(alias="Name")
    """The name of the hyperparameter to tune."""

    max_value: int = Field(alias="MaxValue")
    """The maximum tunable value of the hyperparameter."""

    min_value: int = Field(alias="MinValue")
    """The minimum tunable value of the hyperparameter."""

    scaling_type: Optional[ScalingType1OrStr] = Field(default=UNSET, alias="ScalingType")
    """The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values: Auto Amazon Forecast
    hyperparameter tuning chooses the best scale for the hyperparameter. Linear Hyperparameter tuning searches the
    values in the hyperparameter range by using a linear scale. Logarithmic Hyperparameter tuning searches the values in
    the hyperparameter range by using a logarithmic scale. Logarithmic scaling works only for ranges that have values
    greater than 0. ReverseLogarithmic Not supported for IntegerParameterRange. Reverse logarithmic scaling works only
    for ranges that are entirely w"""


class IntegerParameterRangeDict(TypedDict):
    name: str
    max_value: int
    min_value: int
    scaling_type: NotRequired[ScalingType1OrStr]
