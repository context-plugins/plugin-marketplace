from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.environment_model import EnvironmentModelOrStr
from .enums.platform import PlatformOrStr
from .pagination import Pagination, PaginationDict
from .platform_result import PlatformResult, PlatformResultDict
from .warning_model import WarningModel, WarningModelDict


class Meta(SdkBaseModel):
    """Canonical response metadata present on every 200 (§6.3.3)."""

    request_id: str = Field(alias="requestId")
    """Correlation id (also the X-Request-Id header): req_ + 26-char Crockford ULID."""

    platforms: list[PlatformOrStr]
    environment: Optional[EnvironmentModelOrStr] = UNSET
    """Authenticated key environment used for this response. ``test`` means deterministic sandbox fixtures, never a live
    scrape."""

    sandbox: Optional[bool] = UNSET
    """True when the response came from the deterministic sandbox (``stay_test_`` key)."""

    cached: bool
    """Served fully from cache. Cached results still bill at tier (margin, not discount)."""

    partial: bool
    """At least one fan-out leg failed; failed legs are charged 0."""

    credits_charged: int = Field(alias="creditsCharged")
    currency: str
    pagination: OptionalNullable[Pagination] = UNSET
    platform_results: Optional[list[PlatformResult]] = Field(default=UNSET, alias="platformResults")
    warnings: Optional[list[WarningModel]] = UNSET


class MetaDict(TypedDict):
    request_id: str
    platforms: list[PlatformOrStr]
    environment: NotRequired[EnvironmentModelOrStr]
    sandbox: NotRequired[bool]
    cached: bool
    partial: bool
    credits_charged: int
    currency: str
    pagination: NotRequired[PaginationDict | None]
    platform_results: NotRequired[list[PlatformResultDict]]
    warnings: NotRequired[list[WarningModelDict]]
