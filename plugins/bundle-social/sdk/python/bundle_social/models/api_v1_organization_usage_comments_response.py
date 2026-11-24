from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1OrganizationUsageCommentsResponse(SdkBaseModel):
    used: float
    limit: float
    remaining: float


class ApiV1OrganizationUsageCommentsResponseDict(TypedDict):
    used: float
    limit: float
    remaining: float
