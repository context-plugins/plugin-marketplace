from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceReference(SdkBaseModel):
    """Reference to another resource, used when listing blockers or usages."""

    id: Optional[str] = UNSET
    """Resource identifier"""

    name: Optional[str] = UNSET
    """Resource name"""

    owner: Optional[str] = UNSET
    """Resource owner (only present if requester doesn't have access)"""


class ResourceReferenceDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    owner: NotRequired[str]
