from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_title import JobTitleOrStr
from .enums.language import LanguageOrStr


class UpdatedUserBody(SdkBaseModel):
    """The updated user record."""

    id: Optional[str] = UNSET
    """The unique ID of the user."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The user's display name."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """The user's first name."""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """The user's last name."""

    email: Optional[str] = UNSET
    """The user's email address."""

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


class UpdatedUserBodyDict(TypedDict):
    id: NotRequired[str]
    display_name: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[str]
    job_title: NotRequired[JobTitleOrStr]
    phone: NotRequired[str]
    phone_extension: NotRequired[str]
    language: NotRequired[LanguageOrStr]
    role_id: NotRequired[str]
    organization_id: NotRequired[str]
