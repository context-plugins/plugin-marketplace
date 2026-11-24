from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_bypass_item import CustomBypassItem, CustomBypassItemDict


class Custom2(SdkBaseModel):
    """Custom application bypass entries defined by the admin"""

    mac: list[CustomBypassItem]
    """Custom bypass apps on macOS"""

    windows: list[CustomBypassItem]
    """Custom bypass apps on Windows"""


class Custom2Dict(TypedDict):
    mac: list[CustomBypassItemDict]
    windows: list[CustomBypassItemDict]
