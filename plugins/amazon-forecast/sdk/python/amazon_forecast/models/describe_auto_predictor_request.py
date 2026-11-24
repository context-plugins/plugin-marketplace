from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeAutoPredictorRequest(SdkBaseModel):
    predictor_arn: str = Field(alias="PredictorArn")
    """The Amazon Resource Name (ARN) of the predictor."""


class DescribeAutoPredictorRequestDict(TypedDict):
    predictor_arn: str
