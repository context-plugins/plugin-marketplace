from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MoveTableToDatabaseRequest(SdkBaseModel):
    """Request message for DataprocMetastore.MoveTableToDatabase."""

    db_name: Optional[str] = Field(default=UNSET, alias="dbName")
    """Required. The name of the database where the table resides."""

    table_name: Optional[str] = Field(default=UNSET, alias="tableName")
    """Required. The name of the table to be moved."""

    destination_db_name: Optional[str] = Field(default=UNSET, alias="destinationDbName")
    """Required. The name of the database where the table should be moved."""


class MoveTableToDatabaseRequestDict(TypedDict):
    db_name: NotRequired[str]
    table_name: NotRequired[str]
    destination_db_name: NotRequired[str]
