from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.value import ValueOrStr


class Gender(SdkBaseModel):
    value: Optional[ValueOrStr] = Field(default=UNSET, alias="Value")
    """The predicted gender of the face."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Level of confidence in the prediction."""


class GenderDict(TypedDict):
    value: NotRequired[ValueOrStr]
    confidence: NotRequired[float]
