from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .disassociated_face import DisassociatedFace, DisassociatedFaceDict
from .enums.user_status1 import UserStatus1OrStr
from .unsuccessful_face_disassociation import UnsuccessfulFaceDisassociation, UnsuccessfulFaceDisassociationDict


class DisassociateFacesResponse(SdkBaseModel):
    disassociated_faces: Optional[list[DisassociatedFace]] = Field(default=UNSET, alias="DisassociatedFaces")
    """An array of DissociatedFace objects containing FaceIds that are successfully disassociated with the UserID is
    returned. Returned if the DisassociatedFaces action is successful."""

    unsuccessful_face_disassociations: Optional[list[UnsuccessfulFaceDisassociation]] = Field(
        default=UNSET, alias="UnsuccessfulFaceDisassociations"
    )
    """An array of UnsuccessfulDisassociation objects containing FaceIds that are not successfully associated, along
    with the reasons for the failure to associate. Returned if the DisassociateFaces action is successful."""

    user_status: Optional[UserStatus1OrStr] = Field(default=UNSET, alias="UserStatus")
    """The status of an update made to a User. Reflects if the User has been updated for every requested change."""


class DisassociateFacesResponseDict(TypedDict):
    disassociated_faces: NotRequired[list[DisassociatedFaceDict]]
    unsuccessful_face_disassociations: NotRequired[list[UnsuccessfulFaceDisassociationDict]]
    user_status: NotRequired[UserStatus1OrStr]
