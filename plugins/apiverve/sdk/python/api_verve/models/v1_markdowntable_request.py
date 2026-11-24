from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1MarkdowntableRequest(SdkBaseModel):
    headers: str
    """Array of column header names"""

    rows: str
    """Array of row arrays containing cell values"""

    alignment: Optional[str] = UNSET
    """Column alignment: left, center, right, or array of alignments per column"""


class V1MarkdowntableRequestDict(TypedDict):
    headers: str
    rows: str
    alignment: NotRequired[str]
