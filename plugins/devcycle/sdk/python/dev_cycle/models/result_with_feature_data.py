from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .feature_data_point import FeatureDataPoint, FeatureDataPointDict


class ResultWithFeatureData(SdkBaseModel):
    evaluations: list[FeatureDataPoint]


class ResultWithFeatureDataDict(TypedDict):
    evaluations: list[FeatureDataPointDict]
