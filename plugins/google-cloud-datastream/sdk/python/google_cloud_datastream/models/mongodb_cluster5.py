from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_database import MongodbDatabase, MongodbDatabaseDict


class MongodbCluster5(SdkBaseModel):
    """The MongoDB collections to include in the stream."""

    databases: Optional[list[MongodbDatabase]] = UNSET
    """MongoDB databases in the cluster."""


class MongodbCluster5Dict(TypedDict):
    databases: NotRequired[list[MongodbDatabaseDict]]
