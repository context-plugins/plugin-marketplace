from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Account(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET


class AccountDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
