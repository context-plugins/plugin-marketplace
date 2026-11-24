from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribePredictorRequest(SdkBaseModel):
    predictor_arn: str = Field(alias="PredictorArn")
    """The Amazon Resource Name (ARN) of the predictor that you want information about."""


class DescribePredictorRequestDict(TypedDict):
    predictor_arn: str
