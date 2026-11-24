from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .predictor_baseline import PredictorBaseline, PredictorBaselineDict


class Baseline(SdkBaseModel):
    predictor_baseline: Optional[PredictorBaseline] = Field(default=UNSET, alias="PredictorBaseline")


class BaselineDict(TypedDict):
    predictor_baseline: NotRequired[PredictorBaselineDict]
