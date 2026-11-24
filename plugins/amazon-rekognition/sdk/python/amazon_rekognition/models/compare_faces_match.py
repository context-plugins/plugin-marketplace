from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .compared_face import ComparedFace, ComparedFaceDict


class CompareFacesMatch(SdkBaseModel):
    similarity: Optional[float] = Field(default=UNSET, alias="Similarity")
    """Level of confidence that the faces match."""

    face: Optional[ComparedFace] = Field(default=UNSET, alias="Face")


class CompareFacesMatchDict(TypedDict):
    similarity: NotRequired[float]
    face: NotRequired[ComparedFaceDict]
