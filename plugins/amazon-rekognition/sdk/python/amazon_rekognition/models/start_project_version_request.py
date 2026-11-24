from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartProjectVersionRequest(SdkBaseModel):
    project_version_arn: str = Field(alias="ProjectVersionArn")
    """The Amazon Resource Name(ARN) of the model version that you want to start."""

    min_inference_units: int = Field(alias="MinInferenceUnits")
    """The minimum number of inference units to use. A single inference unit represents 1 hour of processing. Use a
    higher number to increase the TPS throughput of your model. You are charged for the number of inference units that
    you use."""

    max_inference_units: Optional[int] = Field(default=UNSET, alias="MaxInferenceUnits")
    """The maximum number of inference units to use for auto-scaling the model. If you don't specify a value, Amazon
    Rekognition Custom Labels doesn't auto-scale the model."""


class StartProjectVersionRequestDict(TypedDict):
    project_version_arn: str
    min_inference_units: int
    max_inference_units: NotRequired[int]
