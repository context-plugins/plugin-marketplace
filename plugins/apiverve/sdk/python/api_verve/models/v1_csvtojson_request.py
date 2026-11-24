from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1CsvtojsonRequest(SdkBaseModel):
    csv: str
    """The CSV data to convert to JSON"""

    delimiter: Optional[str] = UNSET
    """The delimiter used in the CSV"""

    has_header: Optional[bool] = UNSET
    """Whether the first row contains column headers (default: true)"""


class V1CsvtojsonRequestDict(TypedDict):
    csv: str
    delimiter: NotRequired[str]
    has_header: NotRequired[bool]
