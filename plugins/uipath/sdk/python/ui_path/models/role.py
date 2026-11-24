from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Role(SdkBaseModel):
    """A role defining a set of permissions in Automation Hub"""

    id: Optional[int] = UNSET
    """Unique integer identifier of the role"""

    name: Optional[str] = UNSET
    """Display name of the role"""

    description: Optional[str] = UNSET
    """Description of the permissions granted by this role"""


class RoleDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    description: NotRequired[str]
