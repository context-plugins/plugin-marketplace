from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BlockedResource1(SdkBaseModel):
    """Describes a blocked resource issue."""

    url: Optional[str] = UNSET
    """URL of the blocked resource."""


class BlockedResource1Dict(TypedDict):
    url: NotRequired[str]
