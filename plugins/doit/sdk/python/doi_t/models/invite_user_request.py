from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_title2 import JobTitle2OrStr


class InviteUserRequest(SdkBaseModel):
    """Request body to invite a new user to the organization."""

    email: EmailStr
    """The email address of the user."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """The first name of the user being invited."""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """The last name of the user being invited."""

    job_title: Optional[JobTitle2OrStr] = Field(default=UNSET, alias="jobTitle")
    """The job function of the user being invited."""

    role_id: Optional[str] = Field(default=UNSET, alias="roleId")
    """The ID of the role to assign to the user."""

    organization_id: Optional[str] = Field(default=UNSET, alias="organizationId")
    """The ID of the organization to assign the user to."""


class InviteUserRequestDict(TypedDict):
    email: EmailStr
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    job_title: NotRequired[JobTitle2OrStr]
    role_id: NotRequired[str]
    organization_id: NotRequired[str]
