from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeltaSyncConfig(SdkBaseModel):
    base_table_ttl: Optional[int] = Field(default=UNSET, alias="baseTableTTL")
    """The number of minutes that an Item is stored in the data source."""

    delta_sync_table_name: Optional[str] = Field(default=UNSET, alias="deltaSyncTableName")
    """The Delta Sync table name."""

    delta_sync_table_ttl: Optional[int] = Field(default=UNSET, alias="deltaSyncTableTTL")
    """The number of minutes that a Delta Sync log entry is stored in the Delta Sync table."""


class DeltaSyncConfigDict(TypedDict):
    base_table_ttl: NotRequired[int]
    delta_sync_table_name: NotRequired[str]
    delta_sync_table_ttl: NotRequired[int]
