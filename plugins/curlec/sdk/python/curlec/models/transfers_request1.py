from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TransfersRequest1(SdkBaseModel):
    on_hold: Optional[bool] = UNSET
    """true to hold settlement; false to release."""

    on_hold_until: Optional[int] = UNSET
    """Unix timestamp for automatic hold release. null = hold indefinitely until manually released."""


class TransfersRequest1Dict(TypedDict):
    on_hold: NotRequired[bool]
    on_hold_until: NotRequired[int]
