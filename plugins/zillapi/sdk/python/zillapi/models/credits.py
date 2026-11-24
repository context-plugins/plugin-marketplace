from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Credits(SdkBaseModel):
    balance: Optional[int] = UNSET
    granted_this_cycle: Optional[int] = UNSET


class CreditsDict(TypedDict):
    balance: NotRequired[int]
    granted_this_cycle: NotRequired[int]
