from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CheckResultAnomalyDetectionDetailsDto(SdkBaseModel):
    predicted_value: Optional[float] = Field(default=UNSET, alias="predictedValue")


class CheckResultAnomalyDetectionDetailsDtoDict(TypedDict):
    predicted_value: NotRequired[float]
