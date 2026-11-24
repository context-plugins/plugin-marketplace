from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FaceSearchSettings(SdkBaseModel):
    collection_id: Optional[str] = Field(default=UNSET, alias="CollectionId")
    """The ID of a collection that contains faces that you want to search for."""

    face_match_threshold: Optional[float] = Field(default=UNSET, alias="FaceMatchThreshold")
    """Minimum face match confidence score that must be met to return a result for a recognized face. The default is 80.
    0 is the lowest confidence. 100 is the highest confidence. Values between 0 and 100 are accepted, and values lower
    than 80 are set to 80."""


class FaceSearchSettingsDict(TypedDict):
    collection_id: NotRequired[str]
    face_match_threshold: NotRequired[float]
