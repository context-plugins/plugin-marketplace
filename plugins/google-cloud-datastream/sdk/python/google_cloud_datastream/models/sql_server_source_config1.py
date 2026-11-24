from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sql_server_change_tables1 import SqlServerChangeTables1, SqlServerChangeTables1Dict
from .sql_server_rdbms3 import SqlServerRdbms3, SqlServerRdbms3Dict
from .sql_server_rdbms4 import SqlServerRdbms4, SqlServerRdbms4Dict


class SqlServerSourceConfig1(SdkBaseModel):
    """SQLServer data source configuration."""

    max_concurrent_cdc_tasks: Optional[int] = Field(default=UNSET, alias="maxConcurrentCdcTasks")
    """Max concurrent CDC tasks."""

    include_objects: Optional[SqlServerRdbms3] = Field(default=UNSET, alias="includeObjects")
    """The SQLServer objects to include in the stream."""

    max_concurrent_backfill_tasks: Optional[int] = Field(default=UNSET, alias="maxConcurrentBackfillTasks")
    """Max concurrent backfill tasks."""

    exclude_objects: Optional[SqlServerRdbms4] = Field(default=UNSET, alias="excludeObjects")
    """The SQLServer objects to exclude from the stream."""

    transaction_logs: Optional[Any] = Field(default=UNSET, alias="transactionLogs")
    """CDC reader reads from transaction logs."""

    change_tables: Optional[SqlServerChangeTables1] = Field(default=UNSET, alias="changeTables")
    """CDC reader reads from change tables."""


class SqlServerSourceConfig1Dict(TypedDict):
    max_concurrent_cdc_tasks: NotRequired[int]
    include_objects: NotRequired[SqlServerRdbms3Dict]
    max_concurrent_backfill_tasks: NotRequired[int]
    exclude_objects: NotRequired[SqlServerRdbms4Dict]
    transaction_logs: NotRequired[Any]
    change_tables: NotRequired[SqlServerChangeTables1Dict]
