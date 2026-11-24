from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .binary_log_parser2 import BinaryLogParser2, BinaryLogParser2Dict
from .oracle_rdbms2 import OracleRdbms2, OracleRdbms2Dict
from .oracle_rdbms3 import OracleRdbms3, OracleRdbms3Dict


class OracleSourceConfig1(SdkBaseModel):
    """Oracle data source configuration."""

    max_concurrent_backfill_tasks: Optional[int] = Field(default=UNSET, alias="maxConcurrentBackfillTasks")
    """Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or set to 0), the
    system's default value is used."""

    drop_large_objects: Optional[Any] = Field(default=UNSET, alias="dropLargeObjects")
    """Drop large object values."""

    exclude_objects: Optional[OracleRdbms2] = Field(default=UNSET, alias="excludeObjects")
    """The Oracle objects to exclude from the stream."""

    binary_log_parser: Optional[BinaryLogParser2] = Field(default=UNSET, alias="binaryLogParser")
    """Use Binary Log Parser."""

    max_concurrent_cdc_tasks: Optional[int] = Field(default=UNSET, alias="maxConcurrentCdcTasks")
    """Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set to 0), the system's
    default value is used."""

    stream_large_objects: Optional[Any] = Field(default=UNSET, alias="streamLargeObjects")
    """Stream large object values."""

    include_objects: Optional[OracleRdbms3] = Field(default=UNSET, alias="includeObjects")
    """The Oracle objects to include in the stream."""

    log_miner: Optional[Any] = Field(default=UNSET, alias="logMiner")
    """Use LogMiner."""


class OracleSourceConfig1Dict(TypedDict):
    max_concurrent_backfill_tasks: NotRequired[int]
    drop_large_objects: NotRequired[Any]
    exclude_objects: NotRequired[OracleRdbms2Dict]
    binary_log_parser: NotRequired[BinaryLogParser2Dict]
    max_concurrent_cdc_tasks: NotRequired[int]
    stream_large_objects: NotRequired[Any]
    include_objects: NotRequired[OracleRdbms3Dict]
    log_miner: NotRequired[Any]
