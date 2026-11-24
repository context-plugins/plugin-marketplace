from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .field_schema import FieldSchema, FieldSchemaDict
from .view_schema import ViewSchema, ViewSchemaDict


class TableSchema(SdkBaseModel):
    """The schema definition of a table within a base."""

    id: str
    """The unique identifier of the table (starts with 'tbl')."""

    name: str
    """The name of the table."""

    description: Optional[str] = UNSET
    """The description of the table."""

    primary_field_id: Optional[str] = Field(default=UNSET, alias="primaryFieldId")
    """The ID of the primary field for this table."""

    fields: list[FieldSchema]
    """The list of field definitions in the table."""

    views: list[ViewSchema]
    """The list of view definitions in the table."""


class TableSchemaDict(TypedDict):
    id: str
    name: str
    description: NotRequired[str]
    primary_field_id: NotRequired[str]
    fields: list[FieldSchemaDict]
    views: list[ViewSchemaDict]
