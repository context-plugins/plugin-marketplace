from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .email import Email, EmailDict
from .name import Name, NameDict


class ScimUserCreateRequest(SdkBaseModel):
    """Request body for creating or replacing a SCIM user."""

    schemas: list[str]
    user_name: str = Field(alias="userName")
    """The unique username for the user, typically an email address."""

    name: Optional[Name] = UNSET
    emails: Optional[list[Email]] = UNSET
    active: bool = True
    """Whether the user account should be active."""

    title: Optional[str] = UNSET
    """The user's job title."""


class ScimUserCreateRequestDict(TypedDict):
    schemas: list[str]
    user_name: str
    name: NotRequired[NameDict]
    emails: NotRequired[list[EmailDict]]
    active: NotRequired[bool]
    title: NotRequired[str]
