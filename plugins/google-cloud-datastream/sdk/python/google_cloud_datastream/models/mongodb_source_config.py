from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.json_mode import JsonModeOrStr
from .mongodb_cluster4 import MongodbCluster4, MongodbCluster4Dict
from .mongodb_cluster5 import MongodbCluster5, MongodbCluster5Dict


class MongodbSourceConfig(SdkBaseModel):
    """Configuration for syncing data from a MongoDB source."""

    max_concurrent_backfill_tasks: Optional[int] = Field(default=UNSET, alias="maxConcurrentBackfillTasks")
    """Optional. Maximum number of concurrent backfill tasks. The number should be non-negative and less than or equal
    to 50. If not set (or set to 0), the system's default value is used"""

    exclude_objects: Optional[MongodbCluster4] = Field(default=UNSET, alias="excludeObjects")
    """The MongoDB collections to exclude from the stream."""

    include_objects: Optional[MongodbCluster5] = Field(default=UNSET, alias="includeObjects")
    """The MongoDB collections to include in the stream."""

    json_mode: Optional[JsonModeOrStr] = Field(default=UNSET, alias="jsonMode")
    """Optional. MongoDB JSON mode to use for the stream."""


class MongodbSourceConfigDict(TypedDict):
    max_concurrent_backfill_tasks: NotRequired[int]
    exclude_objects: NotRequired[MongodbCluster4Dict]
    include_objects: NotRequired[MongodbCluster5Dict]
    json_mode: NotRequired[JsonModeOrStr]
