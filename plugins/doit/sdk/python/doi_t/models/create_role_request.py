from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateRoleRequest(SdkBaseModel):
    """Request body to create a custom role."""

    name: str
    """The name of the role. Must be nonblank, contain no leading or trailing whitespace, and be unique among the
    customer's roles, including preset roles."""

    description: Optional[str] = UNSET
    """The description of the role."""

    permissions: Optional[list[str]] = UNSET
    """Permission IDs to assign to the role, as returned in ``permissions`` by ``GET /iam/v1/roles``. Duplicate IDs are
    rejected. Input order is preserved. Omission or an empty array creates a role without permissions."""


class CreateRoleRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    permissions: NotRequired[list[str]]
