from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_database import MongodbDatabase, MongodbDatabaseDict


class MongodbCluster(SdkBaseModel):
    """MongoDB Cluster structure."""

    databases: Optional[list[MongodbDatabase]] = UNSET
    """MongoDB databases in the cluster."""


class MongodbClusterDict(TypedDict):
    databases: NotRequired[list[MongodbDatabaseDict]]
