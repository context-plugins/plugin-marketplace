from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignalFilterLocation(SdkBaseModel):
    """Location filter for hiring signals. ``country`` is required; ``state`` is optional."""

    country: str
    state: Optional[str] = UNSET


class SignalFilterLocationDict(TypedDict):
    country: str
    state: NotRequired[str]
