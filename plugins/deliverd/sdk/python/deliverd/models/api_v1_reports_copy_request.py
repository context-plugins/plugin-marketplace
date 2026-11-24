from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ReportsCopyRequest(SdkBaseModel):
    title: Optional[str] = UNSET


class ApiV1ReportsCopyRequestDict(TypedDict):
    title: NotRequired[str]
