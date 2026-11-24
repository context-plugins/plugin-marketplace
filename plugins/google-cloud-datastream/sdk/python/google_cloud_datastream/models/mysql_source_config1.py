from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mysql_rdbms2 import MysqlRdbms2, MysqlRdbms2Dict
from .mysql_rdbms3 import MysqlRdbms3, MysqlRdbms3Dict


class MysqlSourceConfig1(SdkBaseModel):
    """MySQL data source configuration."""

    max_concurrent_cdc_tasks: Optional[int] = Field(default=UNSET, alias="maxConcurrentCdcTasks")
    """Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's
    default value will be used."""

    exclude_objects: Optional[MysqlRdbms2] = Field(default=UNSET, alias="excludeObjects")
    """The MySQL objects to exclude from the stream."""

    gtid: Optional[Any] = UNSET
    """Use GTID based replication."""

    binary_log_position: Optional[Any] = Field(default=UNSET, alias="binaryLogPosition")
    """Use Binary log position based replication."""

    include_objects: Optional[MysqlRdbms3] = Field(default=UNSET, alias="includeObjects")
    """The MySQL objects to retrieve from the source."""

    max_concurrent_backfill_tasks: Optional[int] = Field(default=UNSET, alias="maxConcurrentBackfillTasks")
    """Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the
    system's default value will be used."""


class MysqlSourceConfig1Dict(TypedDict):
    max_concurrent_cdc_tasks: NotRequired[int]
    exclude_objects: NotRequired[MysqlRdbms2Dict]
    gtid: NotRequired[Any]
    binary_log_position: NotRequired[Any]
    include_objects: NotRequired[MysqlRdbms3Dict]
    max_concurrent_backfill_tasks: NotRequired[int]
