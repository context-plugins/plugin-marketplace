from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomBypassRequestItem(SdkBaseModel):
    """A custom bypass entry for write operations."""

    name: str
    """The name of the entity to bypass (application name or URL pattern)"""

    note: Optional[str] = UNSET
    """Optional note about this bypass entry"""


class CustomBypassRequestItemDict(TypedDict):
    name: str
    note: NotRequired[str]
