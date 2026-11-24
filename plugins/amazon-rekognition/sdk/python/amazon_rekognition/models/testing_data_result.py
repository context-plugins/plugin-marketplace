from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .testing_data import TestingData, TestingDataDict
from .validation_data import ValidationData, ValidationDataDict


class TestingDataResult(SdkBaseModel):
    input: Optional[TestingData] = Field(default=UNSET, alias="Input")
    output: Optional[TestingData] = Field(default=UNSET, alias="Output")
    validation: Optional[ValidationData] = Field(default=UNSET, alias="Validation")


class TestingDataResultDict(TypedDict):
    input: NotRequired[TestingDataDict]
    output: NotRequired[TestingDataDict]
    validation: NotRequired[ValidationDataDict]
