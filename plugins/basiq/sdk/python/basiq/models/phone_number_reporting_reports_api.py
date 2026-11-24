from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PhoneNumberReportingReportsApi(SdkBaseModel):
    international: Optional[str] = UNSET
    """International Phone Number"""

    local: Optional[str] = UNSET
    """Local Phone Number"""


class PhoneNumberReportingReportsApiDict(TypedDict):
    international: NotRequired[str]
    local: NotRequired[str]
