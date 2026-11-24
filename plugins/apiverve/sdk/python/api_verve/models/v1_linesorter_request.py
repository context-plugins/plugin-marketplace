from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1LinesorterRequest(SdkBaseModel):
    lines: str
    """Array of text lines to sort (max 10,000)"""

    order: Optional[str] = UNSET
    """Sort order"""

    case_sensitive: Optional[bool] = Field(default=UNSET, alias="caseSensitive")
    """Enable case-sensitive sorting"""


class V1LinesorterRequestDict(TypedDict):
    lines: str
    order: NotRequired[str]
    case_sensitive: NotRequired[bool]
