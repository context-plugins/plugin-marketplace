from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Record(SdkBaseModel):
    """An Airtable record representing a single row in a table."""

    id: str
    """The unique identifier of the record (starts with 'rec')."""

    created_time: RFC3339DateTime = Field(alias="createdTime")
    """The time when the record was created in ISO 8601 format."""

    fields: Any
    """A mapping of field names (or field IDs when returnFieldsByFieldId is true) to their cell values. The structure
    depends on the field types defined in the table schema."""


class RecordDict(TypedDict):
    id: str
    created_time: RFC3339DateTime
    fields: Any
