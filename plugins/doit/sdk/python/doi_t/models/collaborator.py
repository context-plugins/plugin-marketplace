from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.role import RoleOrStr


class Collaborator(SdkBaseModel):
    """A user or identity that has access to a resource."""

    email: Optional[str] = UNSET
    role: Optional[RoleOrStr] = UNSET


class CollaboratorDict(TypedDict):
    email: NotRequired[str]
    role: NotRequired[RoleOrStr]
