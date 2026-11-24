from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubdivisionReportingReportsApi(SdkBaseModel):
    code: Optional[str] = UNSET
    """Subdivision Code"""

    title: Optional[str] = UNSET
    """Subdivision Details"""


class SubdivisionReportingReportsApiDict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
