from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Method1(SdkBaseModel):
    """Enable or disable specific payment methods."""

    card: Optional[bool] = UNSET
    netbanking: Optional[bool] = UNSET
    upi: Optional[bool] = UNSET
    wallet: Optional[bool] = UNSET


class Method1Dict(TypedDict):
    card: NotRequired[bool]
    netbanking: NotRequired[bool]
    upi: NotRequired[bool]
    wallet: NotRequired[bool]
