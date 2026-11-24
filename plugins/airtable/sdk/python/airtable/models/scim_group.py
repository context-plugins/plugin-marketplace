from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .member import Member, MemberDict
from .scim_meta import ScimMeta, ScimMetaDict


class ScimGroup(SdkBaseModel):
    """A SCIM 2.0 Group resource representing a user group."""

    schemas: list[str]
    id: str
    """The unique identifier for the SCIM group resource."""

    display_name: str = Field(alias="displayName")
    """The display name of the group."""

    members: Optional[list[Member]] = UNSET
    """The members of the group."""

    meta: Optional[ScimMeta] = UNSET
    """SCIM resource metadata."""


class ScimGroupDict(TypedDict):
    schemas: list[str]
    id: str
    display_name: str
    members: NotRequired[list[MemberDict]]
    meta: NotRequired[ScimMetaDict]
