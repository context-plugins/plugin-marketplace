from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .preferences import Preferences, PreferencesDict


class Display(SdkBaseModel):
    blocks: Optional[Any] = UNSET
    """Custom payment method groupings with names and instruments."""

    sequence: Optional[list[str]] = UNSET
    """Display order of payment method blocks."""

    preferences: Optional[Preferences] = UNSET


class DisplayDict(TypedDict):
    blocks: NotRequired[Any]
    sequence: NotRequired[list[str]]
    preferences: NotRequired[PreferencesDict]
