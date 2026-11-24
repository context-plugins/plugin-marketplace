from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Suggest(SdkBaseModel):
    id: str
    term: str
    country: str
    added: RFC3339DateTime
    lang: str
    store: str
    crawled: Optional[RFC3339DateTime] = UNSET
    app: Optional[str] = UNSET
    results: Optional[list[str]] = UNSET


class SuggestDict(TypedDict):
    id: str
    term: str
    country: str
    added: RFC3339DateTime
    lang: str
    store: str
    crawled: NotRequired[RFC3339DateTime]
    app: NotRequired[str]
    results: NotRequired[list[str]]
