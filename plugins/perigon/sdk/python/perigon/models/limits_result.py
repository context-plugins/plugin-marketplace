from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .api_limits_dto import ApiLimitsDto, ApiLimitsDtoDict


class LimitsResult(SdkBaseModel):
    """API usage and limits response."""

    data: ApiLimitsDto
    """Current API usage and limits for the authenticated account, optionally including the status of additional API
    keys that were requested. Reading this does not count against the account's request quota or rate limit."""


class LimitsResultDict(TypedDict):
    data: ApiLimitsDtoDict
