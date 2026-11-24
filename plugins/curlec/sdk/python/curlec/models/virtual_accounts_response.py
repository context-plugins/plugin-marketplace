from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .virtual_account import VirtualAccount, VirtualAccountDict


class VirtualAccountsResponse(SdkBaseModel):
    entity: Optional[str] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[VirtualAccount]] = UNSET


class VirtualAccountsResponseDict(TypedDict):
    entity: NotRequired[str]
    count: NotRequired[int]
    items: NotRequired[list[VirtualAccountDict]]
