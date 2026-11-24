from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CoversBodyPart(SdkBaseModel):
    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that Amazon Rekognition has in the value of Value."""

    value: Optional[bool] = Field(default=UNSET, alias="Value")
    """True if the PPE covers the corresponding body part, otherwise false."""


class CoversBodyPartDict(TypedDict):
    confidence: NotRequired[float]
    value: NotRequired[bool]
