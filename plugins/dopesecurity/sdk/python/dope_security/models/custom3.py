from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Custom3(SdkBaseModel):
    mac: Optional[list[str]] = UNSET
    """List of macOS application names to delete"""

    windows: Optional[list[str]] = UNSET
    """List of Windows application names to delete"""


class Custom3Dict(TypedDict):
    mac: NotRequired[list[str]]
    windows: NotRequired[list[str]]
