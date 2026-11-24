from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unsuccessful_face_deletion import UnsuccessfulFaceDeletion, UnsuccessfulFaceDeletionDict


class DeleteFacesResponse(SdkBaseModel):
    deleted_faces: Optional[list[str]] = Field(default=UNSET, alias="DeletedFaces")
    """An array of strings (face IDs) of the faces that were deleted."""

    unsuccessful_face_deletions: Optional[list[UnsuccessfulFaceDeletion]] = Field(
        default=UNSET, alias="UnsuccessfulFaceDeletions"
    )
    """An array of any faces that weren't deleted."""


class DeleteFacesResponseDict(TypedDict):
    deleted_faces: NotRequired[list[str]]
    unsuccessful_face_deletions: NotRequired[list[UnsuccessfulFaceDeletionDict]]
