from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .usage import Usage, UsageDict


class ApiV1ReportingApiUsageResponse(SdkBaseModel):
    by_api_key: Optional[Any] = UNSET
    by_endpoint: Optional[Any] = UNSET
    currency: Optional[str] = UNSET
    daily_usage: Optional[Any] = UNSET
    """Characters per day."""

    end_date: Optional[str] = UNSET
    last_updated: Optional[Any] = UNSET
    """When usage was last aggregated."""

    monthly_usage: Optional[Any] = UNSET
    """Characters per month."""

    start_date: Optional[str] = UNSET
    total_characters: Optional[int] = UNSET
    total_cost_usd: Optional[float] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1ReportingApiUsageResponseDict(TypedDict):
    by_api_key: NotRequired[Any]
    by_endpoint: NotRequired[Any]
    currency: NotRequired[str]
    daily_usage: NotRequired[Any]
    end_date: NotRequired[str]
    last_updated: NotRequired[Any]
    monthly_usage: NotRequired[Any]
    start_date: NotRequired[str]
    total_characters: NotRequired[int]
    total_cost_usd: NotRequired[float]
    usage: NotRequired[UsageDict]
