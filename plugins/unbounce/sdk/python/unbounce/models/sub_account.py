from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubAccount(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    account_id: Optional[str] = UNSET


class SubAccountDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    account_id: NotRequired[str]
