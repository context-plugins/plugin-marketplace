from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.export_type1 import ExportType1OrStr


class GroupExportResponse(SdkBaseModel):
    export_type: Optional[ExportType1OrStr] = UNSET
    filename: Optional[str] = UNSET
    """Suggested download filename for the CSV."""

    media_type: Optional[str] = UNSET
    row_count: Optional[int] = UNSET
    """Number of data rows in the CSV (excluding the header row)."""

    column_count: Optional[int] = UNSET
    columns: Optional[list[str]] = UNSET
    """CSV column headers in order."""

    size_bytes: Optional[int] = UNSET
    """Size of the raw CSV bytes before base64 encoding."""

    data_uri: Optional[str] = UNSET
    """CSV file as a data:text/csv;base64,... URI."""

    unix_from: Optional[int] = UNSET
    """Metrics window start (Unix seconds) when metrics are included in the export."""

    unix_to: Optional[int] = UNSET
    """Metrics window end (Unix seconds) when metrics are included in the export."""

    truncated: Optional[bool] = UNSET
    """True when the match set exceeded the per-request row cap and only the first cap rows were exported."""


class GroupExportResponseDict(TypedDict):
    export_type: NotRequired[ExportType1OrStr]
    filename: NotRequired[str]
    media_type: NotRequired[str]
    row_count: NotRequired[int]
    column_count: NotRequired[int]
    columns: NotRequired[list[str]]
    size_bytes: NotRequired[int]
    data_uri: NotRequired[str]
    unix_from: NotRequired[int]
    unix_to: NotRequired[int]
    truncated: NotRequired[bool]
