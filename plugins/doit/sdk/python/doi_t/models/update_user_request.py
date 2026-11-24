from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_function import JobFunctionOrStr
from .enums.job_title import JobTitleOrStr
from .enums.language import LanguageOrStr


class UpdateUserRequest(SdkBaseModel):
    """Fields allowed when updating an existing user."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """The user's first name."""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """The user's last name."""

    job_title: Optional[JobTitleOrStr] = Field(default=UNSET, alias="jobTitle")
    """The user's job function."""

    job_function: Optional[JobFunctionOrStr] = Field(default=UNSET, alias="jobFunction")
    """Deprecated: use 'jobTitle' instead. If both are provided, 'jobTitle' takes precedence."""

    phone: Optional[str] = UNSET
    """The user's country code (e.g., +44)."""

    phone_extension: Optional[str] = Field(default=UNSET, alias="phoneExtension")
    """The user's phone extension (8-15 digits)."""

    language: Optional[LanguageOrStr] = UNSET
    """The user's preferred language."""

    role_id: Optional[str] = Field(default=UNSET, alias="roleId")
    """The ID of the role to assign to the user."""


class UpdateUserRequestDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    job_title: NotRequired[JobTitleOrStr]
    job_function: NotRequired[JobFunctionOrStr]
    phone: NotRequired[str]
    phone_extension: NotRequired[str]
    language: NotRequired[LanguageOrStr]
    role_id: NotRequired[str]
