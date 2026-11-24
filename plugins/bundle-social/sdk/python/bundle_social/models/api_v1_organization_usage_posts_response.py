from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1OrganizationUsagePostsResponse(SdkBaseModel):
    used: float
    limit: float
    remaining: float


class ApiV1OrganizationUsagePostsResponseDict(TypedDict):
    used: float
    limit: float
    remaining: float
