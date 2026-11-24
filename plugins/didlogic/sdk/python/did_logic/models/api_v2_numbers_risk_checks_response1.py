from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .risk_check_request import RiskCheckRequest, RiskCheckRequestDict


class ApiV2NumbersRiskChecksResponse1(SdkBaseModel):
    risk_check_request: RiskCheckRequest
    """Created risk check task details"""


class ApiV2NumbersRiskChecksResponse1Dict(TypedDict):
    risk_check_request: RiskCheckRequestDict
