from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .record import Record, RecordDict


class RecordList(SdkBaseModel):
    """A paginated list of records from a table."""

    records: list[Record]
    offset: Optional[str] = UNSET
    """A pagination cursor. If present, pass this value in the offset query parameter to fetch the next page of
    results."""


class RecordListDict(TypedDict):
    records: list[RecordDict]
    offset: NotRequired[str]
