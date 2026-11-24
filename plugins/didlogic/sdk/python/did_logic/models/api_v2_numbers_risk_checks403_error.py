from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersRiskChecks403Error(SdkBaseModel):
    error: str


class ApiV2NumbersRiskChecks403ErrorDict(TypedDict):
    error: str
