from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateAutoPredictorResponse(SdkBaseModel):
    predictor_arn: Optional[str] = Field(default=UNSET, alias="PredictorArn")
    """The Amazon Resource Name (ARN) of the predictor."""


class CreateAutoPredictorResponseDict(TypedDict):
    predictor_arn: NotRequired[str]
