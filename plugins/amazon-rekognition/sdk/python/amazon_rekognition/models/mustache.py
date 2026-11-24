from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Mustache(SdkBaseModel):
    value: Optional[bool] = Field(default=UNSET, alias="Value")
    """Boolean value that indicates whether the face has mustache or not."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Level of confidence in the determination."""


class MustacheDict(TypedDict):
    value: NotRequired[bool]
    confidence: NotRequired[float]
