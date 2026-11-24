from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class ApiKeySpendLimitDetail(SdkBaseModel):
    """Machine-readable 402 detail shared by run and browser creation."""

    code: str = "api_key_monthly_spend_limit_reached"
    message: str
    cap: float
    spent: float


class ApiKeySpendLimitDetailDict(TypedDict):
    code: NotRequired[str]
    message: str
    cap: float
    spent: float
