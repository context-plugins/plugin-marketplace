from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Stack1(SdkBaseModel):
    name: Optional[str] = UNSET
    """Updated display name."""

    description: Optional[str] = UNSET
    """Updated description."""


class Stack1Dict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
