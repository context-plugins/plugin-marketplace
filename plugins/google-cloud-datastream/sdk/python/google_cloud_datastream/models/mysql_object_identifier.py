from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MysqlObjectIdentifier(SdkBaseModel):
    """Mysql data source object identifier."""

    database: Optional[str] = UNSET
    """Required. The database name."""

    table: Optional[str] = UNSET
    """Required. The table name."""


class MysqlObjectIdentifierDict(TypedDict):
    database: NotRequired[str]
    table: NotRequired[str]
