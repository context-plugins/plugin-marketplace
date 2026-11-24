from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Baths(SdkBaseModel):
    """Bathroom count range."""

    min: Optional[float] = UNSET
    max: Optional[float] = UNSET


class BathsDict(TypedDict):
    min: NotRequired[float]
    max: NotRequired[float]
