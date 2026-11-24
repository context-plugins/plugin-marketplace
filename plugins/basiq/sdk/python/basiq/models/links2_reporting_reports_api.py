from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links2ReportingReportsApi(SdkBaseModel):
    self: Optional[str] = UNSET
    """Self reference URL."""

    next: Optional[str] = UNSET
    """Url to next result."""


class Links2ReportingReportsApiDict(TypedDict):
    self: NotRequired[str]
    next: NotRequired[str]
