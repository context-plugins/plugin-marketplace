from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1AsrReportResponse(SdkBaseModel):
    error: str


class ApiV1AsrReportResponseDict(TypedDict):
    error: str
