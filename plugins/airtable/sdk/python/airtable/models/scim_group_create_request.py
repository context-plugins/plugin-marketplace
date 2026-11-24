from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .member1 import Member1, Member1Dict


class ScimGroupCreateRequest(SdkBaseModel):
    """Request body for creating or replacing a SCIM group."""

    schemas: list[str]
    display_name: str = Field(alias="displayName")
    """The display name of the group."""

    members: Optional[list[Member1]] = UNSET
    """The initial members of the group."""


class ScimGroupCreateRequestDict(TypedDict):
    schemas: list[str]
    display_name: str
    members: NotRequired[list[Member1Dict]]
