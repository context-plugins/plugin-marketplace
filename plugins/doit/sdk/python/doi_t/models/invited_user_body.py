from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_doi_t_users_api import Status1DoiTUsersApiOrStr


class InvitedUserBody(SdkBaseModel):
    id: Optional[str] = UNSET
    """The unique ID of the invited user."""

    email: Optional[str] = UNSET
    """The email address of the invited user."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """The first name of the invited user, if provided during invitation."""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """The last name of the invited user, if provided during invitation."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The display name of the invited user, if provided during invitation."""

    job_title: Optional[str] = Field(default=UNSET, alias="jobTitle")
    """The job function of the invited user, if provided during invitation."""

    role_id: Optional[str] = Field(default=UNSET, alias="roleId")
    """The ID of the role assigned to the user."""

    organization_id: Optional[str] = Field(default=UNSET, alias="organizationId")
    """The ID of the organization assigned to the user."""

    status: Optional[Status1DoiTUsersApiOrStr] = UNSET
    """The status of the user (invited)"""


class InvitedUserBodyDict(TypedDict):
    id: NotRequired[str]
    email: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    display_name: NotRequired[str]
    job_title: NotRequired[str]
    role_id: NotRequired[str]
    organization_id: NotRequired[str]
    status: NotRequired[Status1DoiTUsersApiOrStr]
