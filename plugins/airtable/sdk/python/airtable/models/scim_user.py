from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .email1 import Email1, Email1Dict
from .name1 import Name1, Name1Dict
from .scim_meta import ScimMeta, ScimMetaDict


class ScimUser(SdkBaseModel):
    """A SCIM 2.0 User resource representing a provisioned user."""

    schemas: list[str]
    """The SCIM schema URIs for this resource."""

    id: str
    """The unique identifier for the SCIM user resource."""

    user_name: str = Field(alias="userName")
    """The unique username for the user, typically an email address."""

    name: Optional[Name1] = UNSET
    """The user's name components."""

    emails: Optional[list[Email1]] = UNSET
    """The user's email addresses."""

    active: bool
    """Whether the user account is active."""

    title: Optional[str] = UNSET
    """The user's job title."""

    meta: Optional[ScimMeta] = UNSET
    """SCIM resource metadata."""


class ScimUserDict(TypedDict):
    schemas: list[str]
    id: str
    user_name: str
    name: NotRequired[Name1Dict]
    emails: NotRequired[list[Email1Dict]]
    active: bool
    title: NotRequired[str]
    meta: NotRequired[ScimMetaDict]
