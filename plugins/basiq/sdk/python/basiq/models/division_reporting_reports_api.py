from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DivisionReportingReportsApi(SdkBaseModel):
    title: Optional[str] = UNSET
    """Division Details"""

    code: Optional[str] = UNSET
    """Division Code"""


class DivisionReportingReportsApiDict(TypedDict):
    title: NotRequired[str]
    code: NotRequired[str]
