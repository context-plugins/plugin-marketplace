from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .failed_invitation_dto import FailedInvitationDto, FailedInvitationDtoDict


class PublicApiInviteUserResponse(SdkBaseModel):
    failed_invitations: Optional[list[FailedInvitationDto]] = Field(default=UNSET, alias="failedInvitations")
    valid_invitations: Optional[list[str]] = Field(default=UNSET, alias="validInvitations")


class PublicApiInviteUserResponseDict(TypedDict):
    failed_invitations: NotRequired[list[FailedInvitationDtoDict]]
    valid_invitations: NotRequired[list[str]]
