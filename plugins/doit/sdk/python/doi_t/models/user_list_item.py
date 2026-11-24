from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_title import JobTitleOrStr
from .enums.language import LanguageOrStr
from .enums.status_doi_t_users_api import StatusDoiTUsersApiOrStr


class UserListItem(SdkBaseModel):
    """Summary information of a user."""

    id: Optional[str] = UNSET
    """The unique ID of the user."""

    email: Optional[str] = UNSET
    """The email address of the user."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The user's display name."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """The user's first name."""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """The user's last name."""

    job_title: Optional[JobTitleOrStr] = Field(default=UNSET, alias="jobTitle")
    """The user's job function."""

    phone: Optional[str] = UNSET
    """The user's country code (e.g., +44)."""

    phone_extension: Optional[str] = Field(default=UNSET, alias="phoneExtension")
    """The user's phone extension."""

    language: Optional[LanguageOrStr] = UNSET
    """The user's preferred language."""

    role_id: Optional[str] = Field(default=UNSET, alias="roleId")
    """The ID of the user's role."""

    organization_id: Optional[str] = Field(default=UNSET, alias="organizationId")
    """The ID of the user's organization."""

    status: Optional[StatusDoiTUsersApiOrStr] = UNSET
    """The status of the user (active or invited)."""


class UserListItemDict(TypedDict):
    id: NotRequired[str]
    email: NotRequired[str]
    display_name: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    job_title: NotRequired[JobTitleOrStr]
    phone: NotRequired[str]
    phone_extension: NotRequired[str]
    language: NotRequired[LanguageOrStr]
    role_id: NotRequired[str]
    organization_id: NotRequired[str]
    status: NotRequired[StatusDoiTUsersApiOrStr]
