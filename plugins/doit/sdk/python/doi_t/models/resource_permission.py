from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.role_doi_t_sharing_api import RoleDoiTSharingApiOrStr


class ResourcePermission(SdkBaseModel):
    """A single user's permission entry for a resource."""

    user: Optional[str] = UNSET
    """The email address of the user to whom the role is assigned."""

    role: Optional[RoleDoiTSharingApiOrStr] = UNSET
    """The role assigned to the user, defining their level of access to the resource."""


class ResourcePermissionDict(TypedDict):
    user: NotRequired[str]
    role: NotRequired[RoleDoiTSharingApiOrStr]
