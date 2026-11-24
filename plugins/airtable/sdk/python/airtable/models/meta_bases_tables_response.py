from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .table_schema import TableSchema, TableSchemaDict


class MetaBasesTablesResponse(SdkBaseModel):
    tables: Optional[list[TableSchema]] = UNSET


class MetaBasesTablesResponseDict(TypedDict):
    tables: NotRequired[list[TableSchemaDict]]
