from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .cluster import Cluster, ClusterDict


class SearchResult(SdkBaseModel):
    store: str
    term: str
    country: str = "US"
    lang: str = "en_US"
    repeat: Optional[int] = UNSET
    id_user: Optional[str] = UNSET
    limit: int = 1
    limit_apps: Optional[list[str]] = UNSET
    crawled: Optional[RFC3339DateTime] = UNSET
    id: str
    results: Optional[list[Cluster]] = UNSET


class SearchResultDict(TypedDict):
    store: str
    term: str
    country: NotRequired[str]
    lang: NotRequired[str]
    repeat: NotRequired[int]
    id_user: NotRequired[str]
    limit: NotRequired[int]
    limit_apps: NotRequired[list[str]]
    crawled: NotRequired[RFC3339DateTime]
    id: str
    results: NotRequired[list[ClusterDict]]
