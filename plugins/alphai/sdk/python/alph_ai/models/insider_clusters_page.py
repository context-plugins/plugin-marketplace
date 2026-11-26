from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .insider_cluster import InsiderCluster, InsiderClusterDict
from .insider_clusters_meta import InsiderClustersMeta, InsiderClustersMetaDict


class InsiderClustersPage(SdkBaseModel):
    results: list[InsiderCluster]
    next_cursor: str | None
    """Opaque cursor for the next page (pass back with the same ``sort``); ``null`` at the end."""

    meta: InsiderClustersMeta


class InsiderClustersPageDict(TypedDict):
    results: list[InsiderClusterDict]
    next_cursor: str | None
    meta: InsiderClustersMetaDict
