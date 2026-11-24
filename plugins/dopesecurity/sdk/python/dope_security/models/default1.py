from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .default_bypass_item import DefaultBypassItem, DefaultBypassItemDict


class Default1(SdkBaseModel):
    """Default application bypass entries with their toggle states"""

    mac: list[DefaultBypassItem]
    """Default bypass apps on macOS"""

    windows: list[DefaultBypassItem]
    """Default bypass apps on Windows"""


class Default1Dict(TypedDict):
    mac: list[DefaultBypassItemDict]
    windows: list[DefaultBypassItemDict]
