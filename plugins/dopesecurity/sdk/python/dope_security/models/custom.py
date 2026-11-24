from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_bypass_request_item import CustomBypassRequestItem, CustomBypassRequestItemDict


class Custom(SdkBaseModel):
    """Custom application entries to upsert (matched by name), keyed by platform."""

    mac: Optional[list[CustomBypassRequestItem]] = UNSET
    """Custom bypass apps on macOS."""

    windows: Optional[list[CustomBypassRequestItem]] = UNSET
    """Custom bypass apps on Windows."""


class CustomDict(TypedDict):
    mac: NotRequired[list[CustomBypassRequestItemDict]]
    windows: NotRequired[list[CustomBypassRequestItemDict]]
