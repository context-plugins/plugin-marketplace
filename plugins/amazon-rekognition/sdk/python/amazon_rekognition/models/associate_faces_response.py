from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .associated_face import AssociatedFace, AssociatedFaceDict
from .enums.user_status import UserStatusOrStr
from .unsuccessful_face_association import UnsuccessfulFaceAssociation, UnsuccessfulFaceAssociationDict


class AssociateFacesResponse(SdkBaseModel):
    associated_faces: Optional[list[AssociatedFace]] = Field(default=UNSET, alias="AssociatedFaces")
    """An array of AssociatedFace objects containing FaceIDs that have been successfully associated with the UserID.
    Returned if the AssociateFaces action is successful."""

    unsuccessful_face_associations: Optional[list[UnsuccessfulFaceAssociation]] = Field(
        default=UNSET, alias="UnsuccessfulFaceAssociations"
    )
    """An array of UnsuccessfulAssociation objects containing FaceIDs that are not successfully associated along with
    the reasons. Returned if the AssociateFaces action is successful."""

    user_status: Optional[UserStatusOrStr] = Field(default=UNSET, alias="UserStatus")
    """The status of an update made to a UserID. Reflects if the UserID has been updated for every requested change."""


class AssociateFacesResponseDict(TypedDict):
    associated_faces: NotRequired[list[AssociatedFaceDict]]
    unsuccessful_face_associations: NotRequired[list[UnsuccessfulFaceAssociationDict]]
    user_status: NotRequired[UserStatusOrStr]
