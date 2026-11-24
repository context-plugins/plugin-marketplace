from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .default_bypass_item import DefaultBypassItem, DefaultBypassItemDict


class Default(SdkBaseModel):
    """Default application entries with updated toggle states (matched by name), keyed by platform."""

    mac: Optional[list[DefaultBypassItem]] = UNSET
    """Default bypass apps on macOS."""

    windows: Optional[list[DefaultBypassItem]] = UNSET
    """Default bypass apps on Windows."""


class DefaultDict(TypedDict):
    mac: NotRequired[list[DefaultBypassItemDict]]
    windows: NotRequired[list[DefaultBypassItemDict]]
