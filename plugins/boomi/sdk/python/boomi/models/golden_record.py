from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .source import Source, SourceDict


class GoldenRecord(SdkBaseModel):
    """The authoritative master record that results from matching and merging source records across contributing
    systems."""

    id: Optional[str] = UNSET
    """Unique identifier of the golden record."""

    fields: Optional[Any] = UNSET
    """Field values of the golden record, keyed by field name."""

    sources: Optional[list[Source]] = UNSET
    """Source records that contribute to this golden record."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """Timestamp when the golden record was created."""

    updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedDate")
    """Timestamp when the golden record was last updated."""


class GoldenRecordDict(TypedDict):
    id: NotRequired[str]
    fields: NotRequired[Any]
    sources: NotRequired[list[SourceDict]]
    created_date: NotRequired[RFC3339DateTime]
    updated_date: NotRequired[RFC3339DateTime]
