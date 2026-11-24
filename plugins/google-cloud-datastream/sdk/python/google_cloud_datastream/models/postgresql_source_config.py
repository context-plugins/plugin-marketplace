from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .postgresql_rdbms3 import PostgresqlRdbms3, PostgresqlRdbms3Dict
from .postgresql_rdbms4 import PostgresqlRdbms4, PostgresqlRdbms4Dict


class PostgresqlSourceConfig(SdkBaseModel):
    """Configuration for syncing data from a PostgreSQL source."""

    max_concurrent_backfill_tasks: Optional[int] = Field(default=UNSET, alias="maxConcurrentBackfillTasks")
    """Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the
    system's default value will be used."""

    include_objects: Optional[PostgresqlRdbms3] = Field(default=UNSET, alias="includeObjects")
    """The PostgreSQL objects to include in the stream."""

    publication: Optional[str] = UNSET
    """Required. The name of the publication that includes the set of all tables that are defined in the stream's
    include_objects."""

    replication_slot: Optional[str] = Field(default=UNSET, alias="replicationSlot")
    """Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin."""

    exclude_objects: Optional[PostgresqlRdbms4] = Field(default=UNSET, alias="excludeObjects")
    """The PostgreSQL objects to exclude from the stream."""


class PostgresqlSourceConfigDict(TypedDict):
    max_concurrent_backfill_tasks: NotRequired[int]
    include_objects: NotRequired[PostgresqlRdbms3Dict]
    publication: NotRequired[str]
    replication_slot: NotRequired[str]
    exclude_objects: NotRequired[PostgresqlRdbms4Dict]
