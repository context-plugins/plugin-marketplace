from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersRiskChecksLogs403Error(SdkBaseModel):
    error: str


class ApiV2NumbersRiskChecksLogs403ErrorDict(TypedDict):
    error: str
