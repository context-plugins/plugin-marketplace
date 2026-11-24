from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.group_kind import GroupKindOrStr
from .symbol_peer import SymbolPeer, SymbolPeerDict


class SymbolPeers(SdkBaseModel):
    ticker: str
    group: str
    """Industry (or sector) label the peers share; empty if none."""

    group_kind: GroupKindOrStr
    """Whether the peers were grouped by industry or the broader sector."""

    peers: list[SymbolPeer]


class SymbolPeersDict(TypedDict):
    ticker: str
    group: str
    group_kind: GroupKindOrStr
    peers: list[SymbolPeerDict]
