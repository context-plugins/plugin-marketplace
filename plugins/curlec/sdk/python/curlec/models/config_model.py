from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .display import Display, DisplayDict


class ConfigModel(SdkBaseModel):
    """Advanced checkout display configuration (blocks, sequence, preferences)."""

    display: Optional[Display] = UNSET


class ConfigModelDict(TypedDict):
    display: NotRequired[DisplayDict]
