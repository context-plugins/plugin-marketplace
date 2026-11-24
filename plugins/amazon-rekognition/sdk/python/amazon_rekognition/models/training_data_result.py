from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .training_data import TrainingData, TrainingDataDict
from .validation_data import ValidationData, ValidationDataDict


class TrainingDataResult(SdkBaseModel):
    input: Optional[TrainingData] = Field(default=UNSET, alias="Input")
    output: Optional[TrainingData] = Field(default=UNSET, alias="Output")
    validation: Optional[ValidationData] = Field(default=UNSET, alias="Validation")


class TrainingDataResultDict(TypedDict):
    input: NotRequired[TrainingDataDict]
    output: NotRequired[TrainingDataDict]
    validation: NotRequired[ValidationDataDict]
