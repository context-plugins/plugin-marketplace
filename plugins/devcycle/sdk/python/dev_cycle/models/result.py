from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_point import DataPoint, DataPointDict
from .variation_result import VariationResult, VariationResultDict


class Result(SdkBaseModel):
    data_series: list[DataPoint] = Field(alias="dataSeries")
    variations: list[VariationResult]


class ResultDict(TypedDict):
    data_series: list[DataPointDict]
    variations: list[VariationResultDict]
