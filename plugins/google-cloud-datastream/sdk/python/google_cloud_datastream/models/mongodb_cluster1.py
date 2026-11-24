from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_database import MongodbDatabase, MongodbDatabaseDict


class MongodbCluster1(SdkBaseModel):
    """Enriched MongoDB cluster."""

    databases: Optional[list[MongodbDatabase]] = UNSET
    """MongoDB databases in the cluster."""


class MongodbCluster1Dict(TypedDict):
    databases: NotRequired[list[MongodbDatabaseDict]]
