from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SymbolPeer(SdkBaseModel):
    ticker: str
    name: str


class SymbolPeerDict(TypedDict):
    ticker: str
    name: str
