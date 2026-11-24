from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_database import MongodbDatabase, MongodbDatabaseDict


class MongodbCluster6(SdkBaseModel):
    """MongoDB data source objects to avoid backfilling"""

    databases: Optional[list[MongodbDatabase]] = UNSET
    """MongoDB databases in the cluster."""


class MongodbCluster6Dict(TypedDict):
    databases: NotRequired[list[MongodbDatabaseDict]]
