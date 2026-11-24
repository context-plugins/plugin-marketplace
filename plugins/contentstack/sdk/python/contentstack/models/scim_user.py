from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .email import Email, EmailDict
from .name import Name, NameDict


class ScimUser(SdkBaseModel):
    """A SCIM 2.0 User resource representing a Contentstack user account."""

    schemas: Optional[list[str]] = UNSET
    """SCIM schema URNs for this resource."""

    id: Optional[str] = UNSET
    """SCIM-assigned unique identifier for the user."""

    user_name: Optional[EmailStr] = Field(default=UNSET, alias="userName")
    """The user's email address used as the primary unique identifier."""

    name: Optional[Name] = UNSET
    """The user's name components."""

    emails: Optional[list[Email]] = UNSET
    """List of email addresses for the user."""

    active: Optional[bool] = UNSET
    """Indicates whether the user account is active. Set to false to deprovision (deactivate) the user in
    Contentstack."""


class ScimUserDict(TypedDict):
    schemas: NotRequired[list[str]]
    id: NotRequired[str]
    user_name: NotRequired[EmailStr]
    name: NotRequired[NameDict]
    emails: NotRequired[list[EmailDict]]
    active: NotRequired[bool]
