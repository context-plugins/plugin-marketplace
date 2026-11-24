from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeletePredictorRequest(SdkBaseModel):
    predictor_arn: str = Field(alias="PredictorArn")
    """The Amazon Resource Name (ARN) of the predictor to delete."""


class DeletePredictorRequestDict(TypedDict):
    predictor_arn: str
