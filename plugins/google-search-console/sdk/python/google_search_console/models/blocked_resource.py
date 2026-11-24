from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BlockedResource(SdkBaseModel):
    """Blocked resource."""

    url: Optional[str] = UNSET
    """URL of the blocked resource."""


class BlockedResourceDict(TypedDict):
    url: NotRequired[str]
