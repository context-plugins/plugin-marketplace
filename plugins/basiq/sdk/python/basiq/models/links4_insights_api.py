from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links4InsightsApi(SdkBaseModel):
    self: str
    """Link to current page"""

    next: Optional[str] = UNSET
    """Link to next page (if available)"""

    prev: Optional[str] = UNSET
    """Link to previous page (if available)"""


class Links4InsightsApiDict(TypedDict):
    self: str
    next: NotRequired[str]
    prev: NotRequired[str]
