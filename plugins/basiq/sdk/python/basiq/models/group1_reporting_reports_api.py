from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Group1ReportingReportsApi(SdkBaseModel):
    code: Optional[str] = UNSET
    """Group Code"""

    title: Optional[str] = UNSET
    """Group Details"""


class Group1ReportingReportsApiDict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
