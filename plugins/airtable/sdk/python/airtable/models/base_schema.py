from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .table_schema import TableSchema, TableSchemaDict


class BaseSchema(SdkBaseModel):
    """The full schema of a base including all tables."""

    id: str
    """The unique identifier of the base."""

    name: Optional[str] = UNSET
    """The name of the base."""

    tables: list[TableSchema]


class BaseSchemaDict(TypedDict):
    id: str
    name: NotRequired[str]
    tables: list[TableSchemaDict]
