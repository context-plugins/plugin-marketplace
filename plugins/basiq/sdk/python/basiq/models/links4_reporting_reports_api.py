from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links4ReportingReportsApi(SdkBaseModel):
    self: Optional[str] = UNSET
    """link of report"""


class Links4ReportingReportsApiDict(TypedDict):
    self: NotRequired[str]
