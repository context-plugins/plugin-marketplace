from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class QuarantineEntry(SdkBaseModel):
    """A record held in quarantine due to data quality or matching issues."""

    id: Optional[str] = UNSET
    """Unique identifier of the quarantine entry."""

    source_id: Optional[str] = Field(default=UNSET, alias="sourceId")
    """ID of the source that submitted this record."""

    reason: Optional[str] = UNSET
    """Reason the record was quarantined."""

    fields: Optional[Any] = UNSET
    """Field values of the quarantined record."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """Timestamp when the record entered quarantine."""


class QuarantineEntryDict(TypedDict):
    id: NotRequired[str]
    source_id: NotRequired[str]
    reason: NotRequired[str]
    fields: NotRequired[Any]
    created_date: NotRequired[RFC3339DateTime]
