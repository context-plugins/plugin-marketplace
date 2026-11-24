from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .member import Member, MemberDict


class ScimGroup(SdkBaseModel):
    """A SCIM 2.0 Group resource representing a Contentstack user group."""

    schemas: Optional[list[str]] = UNSET
    """SCIM schema URNs for this resource."""

    id: Optional[str] = UNSET
    """SCIM-assigned unique identifier for the group."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The display name of the group."""

    members: Optional[list[Member]] = UNSET
    """List of user members in the group."""


class ScimGroupDict(TypedDict):
    schemas: NotRequired[list[str]]
    id: NotRequired[str]
    display_name: NotRequired[str]
    members: NotRequired[list[MemberDict]]
