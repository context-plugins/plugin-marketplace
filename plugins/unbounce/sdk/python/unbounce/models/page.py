from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Page(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    sub_account_id: Optional[str] = UNSET
    domain_id: Optional[str] = UNSET
    url: Optional[str] = UNSET
    state: Optional[str] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET


class PageDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    sub_account_id: NotRequired[str]
    domain_id: NotRequired[str]
    url: NotRequired[str]
    state: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
