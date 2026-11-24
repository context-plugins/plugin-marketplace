from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_database import MongodbDatabase, MongodbDatabaseDict


class MongodbCluster3(SdkBaseModel):
    """Optional. MongoDB cluster to enrich with child data objects and metadata."""

    databases: Optional[list[MongodbDatabase]] = UNSET
    """MongoDB databases in the cluster."""


class MongodbCluster3Dict(TypedDict):
    databases: NotRequired[list[MongodbDatabaseDict]]
