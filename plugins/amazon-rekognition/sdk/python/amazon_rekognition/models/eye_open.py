from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EyeOpen(SdkBaseModel):
    value: Optional[bool] = Field(default=UNSET, alias="Value")
    """Boolean value that indicates whether the eyes on the face are open."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Level of confidence in the determination."""


class EyeOpenDict(TypedDict):
    value: NotRequired[bool]
    confidence: NotRequired[float]
