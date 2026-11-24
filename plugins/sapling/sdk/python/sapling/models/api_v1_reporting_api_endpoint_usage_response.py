from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .usage import Usage, UsageDict


class ApiV1ReportingApiEndpointUsageResponse(SdkBaseModel):
    data: Optional[Any] = UNSET
    last_updated: Optional[Any] = UNSET
    """ISO timestamp, or null."""

    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1ReportingApiEndpointUsageResponseDict(TypedDict):
    data: NotRequired[Any]
    last_updated: NotRequired[Any]
    usage: NotRequired[UsageDict]
