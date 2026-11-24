from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateRoleRequest(SdkBaseModel):
    """Fields allowed when updating a custom role. At least one field is required."""

    name: Optional[str] = UNSET
    """The new name of the role. Must be nonblank, contain no leading or trailing whitespace, and be unique among the
    customer's roles, including preset roles. Omission leaves the name unchanged."""

    description: Optional[str] = UNSET
    """The new description of the role. An empty string clears it; omission leaves it unchanged."""

    permissions: Optional[list[str]] = UNSET
    """Permission IDs that replace the role's current permissions, as returned in ``permissions`` by ``GET
    /iam/v1/roles``. Duplicate IDs are rejected. Input order is preserved. An empty array clears all permissions;
    omission leaves them unchanged."""


class UpdateRoleRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    permissions: NotRequired[list[str]]
