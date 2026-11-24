from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .categorical_parameter_range import CategoricalParameterRange, CategoricalParameterRangeDict
from .continuous_parameter_range import ContinuousParameterRange, ContinuousParameterRangeDict
from .integer_parameter_range import IntegerParameterRange, IntegerParameterRangeDict


class ParameterRanges(SdkBaseModel):
    categorical_parameter_ranges: Optional[list[CategoricalParameterRange]] = Field(
        default=UNSET, alias="CategoricalParameterRanges"
    )
    """Specifies the tunable range for each categorical hyperparameter."""

    continuous_parameter_ranges: Optional[list[ContinuousParameterRange]] = Field(
        default=UNSET, alias="ContinuousParameterRanges"
    )
    """Specifies the tunable range for each continuous hyperparameter."""

    integer_parameter_ranges: Optional[list[IntegerParameterRange]] = Field(
        default=UNSET, alias="IntegerParameterRanges"
    )
    """Specifies the tunable range for each integer hyperparameter."""


class ParameterRangesDict(TypedDict):
    categorical_parameter_ranges: NotRequired[list[CategoricalParameterRangeDict]]
    continuous_parameter_ranges: NotRequired[list[ContinuousParameterRangeDict]]
    integer_parameter_ranges: NotRequired[list[IntegerParameterRangeDict]]
