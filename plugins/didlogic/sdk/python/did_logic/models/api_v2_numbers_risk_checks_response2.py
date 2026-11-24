from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersRiskChecksResponse2(SdkBaseModel):
    error: str


class ApiV2NumbersRiskChecksResponse2Dict(TypedDict):
    error: str
