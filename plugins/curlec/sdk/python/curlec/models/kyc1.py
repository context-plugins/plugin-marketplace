from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Kyc1(SdkBaseModel):
    pan: Optional[str] = UNSET
    """Individual PAN. 4th character must be P."""


class Kyc1Dict(TypedDict):
    pan: NotRequired[str]
