from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteFacesRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """Collection from which to remove the specific faces."""

    face_ids: list[str] = Field(alias="FaceIds")
    """An array of face IDs to delete."""


class DeleteFacesRequestDict(TypedDict):
    collection_id: str
    face_ids: list[str]
