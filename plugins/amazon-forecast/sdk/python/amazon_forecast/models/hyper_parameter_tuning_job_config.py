from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .parameter_ranges import ParameterRanges, ParameterRangesDict


class HyperParameterTuningJobConfig(SdkBaseModel):
    parameter_ranges: Optional[ParameterRanges] = Field(default=UNSET, alias="ParameterRanges")


class HyperParameterTuningJobConfigDict(TypedDict):
    parameter_ranges: NotRequired[ParameterRangesDict]
