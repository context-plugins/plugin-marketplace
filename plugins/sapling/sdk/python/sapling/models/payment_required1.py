from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaymentRequired1(SdkBaseModel):
    msg: str
    """Human-readable error message."""

    retry_after: Optional[int] = UNSET
    """Seconds until the trial daily cap resets (next UTC midnight). Present only for the temporary trial-cap case."""


class PaymentRequired1Dict(TypedDict):
    msg: str
    retry_after: NotRequired[int]
