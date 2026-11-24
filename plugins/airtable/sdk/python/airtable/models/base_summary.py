from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.permission_level import PermissionLevelOrStr


class BaseSummary(SdkBaseModel):
    """Summary information about an Airtable base."""

    id: str
    """The unique identifier of the base (starts with 'app')."""

    name: str
    """The name of the base."""

    permission_level: PermissionLevelOrStr = Field(alias="permissionLevel")
    """The permission level the authenticated user has on this base."""


class BaseSummaryDict(TypedDict):
    id: str
    name: str
    permission_level: PermissionLevelOrStr
