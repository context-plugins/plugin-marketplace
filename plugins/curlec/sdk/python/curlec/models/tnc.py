from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Tnc(SdkBaseModel):
    id: Optional[str] = UNSET
    accepted: Optional[bool] = UNSET
    accepted_at: Optional[int] = UNSET
    """Unix timestamp when TnC was accepted."""


class TncDict(TypedDict):
    id: NotRequired[str]
    accepted: NotRequired[bool]
    accepted_at: NotRequired[int]
