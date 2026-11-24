from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2NumbersRiskChecksRequest(SdkBaseModel):
    numbers: Optional[list[str]] = UNSET
    """Array of phone numbers to check for risk"""


class ApiV2NumbersRiskChecksRequestDict(TypedDict):
    numbers: NotRequired[list[str]]
