from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SearchCreate(SdkBaseModel):
    store: str
    term: str
    country: str = "US"
    lang: str = "en_US"
    repeat: Optional[int] = UNSET
    id_user: Optional[str] = UNSET
    limit: int = 1
    limit_apps: Optional[list[str]] = UNSET


class SearchCreateDict(TypedDict):
    store: str
    term: str
    country: NotRequired[str]
    lang: NotRequired[str]
    repeat: NotRequired[int]
    id_user: NotRequired[str]
    limit: NotRequired[int]
    limit_apps: NotRequired[list[str]]
