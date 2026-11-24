from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Income1(SdkBaseModel):
    min: str
    """Minimum income threshold as a numeric string."""

    max: Optional[str] = UNSET
    """Maximum income threshold as a numeric string. Optional."""


class Income1Dict(TypedDict):
    min: str
    max: NotRequired[str]
