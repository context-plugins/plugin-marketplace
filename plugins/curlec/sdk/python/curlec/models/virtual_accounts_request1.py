from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VirtualAccountsRequest1(SdkBaseModel):
    amount: Optional[int] = UNSET
    """New expected amount in paise."""

    close_by: Optional[int] = UNSET
    """New close timestamp. Maximum: 2147483647."""

    description: Optional[str] = UNSET


class VirtualAccountsRequest1Dict(TypedDict):
    amount: NotRequired[int]
    close_by: NotRequired[int]
    description: NotRequired[str]
