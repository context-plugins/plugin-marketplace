from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class SuggestLite(SdkBaseModel):
    id: str
    term: str
    country: str
    added: RFC3339DateTime
    lang: str
    store: str


class SuggestLiteDict(TypedDict):
    id: str
    term: str
    country: str
    added: RFC3339DateTime
    lang: str
    store: str
