from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Balance3(SdkBaseModel):
    min: str
    """Minimum balance threshold as a numeric string."""

    max: Optional[str] = UNSET
    """Maximum balance threshold as a numeric string. Optional."""


class Balance3Dict(TypedDict):
    min: str
    max: NotRequired[str]
