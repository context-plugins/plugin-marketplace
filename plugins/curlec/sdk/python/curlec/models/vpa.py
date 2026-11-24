from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Vpa(SdkBaseModel):
    """Required if type=vpa."""

    address: Optional[str] = UNSET
    """Full UPI VPA address (e.g., user@upi)."""


class VpaDict(TypedDict):
    address: NotRequired[str]
