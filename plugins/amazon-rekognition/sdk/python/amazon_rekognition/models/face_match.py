from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .face import Face, FaceDict


class FaceMatch(SdkBaseModel):
    similarity: Optional[float] = Field(default=UNSET, alias="Similarity")
    """Confidence in the match of this face with the input face."""

    face: Optional[Face] = Field(default=UNSET, alias="Face")


class FaceMatchDict(TypedDict):
    similarity: NotRequired[float]
    face: NotRequired[FaceDict]
