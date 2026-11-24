from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1OptimizedStatsNode2(SdkBaseModel):
    """``stats`` results."""

    data: Optional[list[Any]] = UNSET
    """List of data values."""


class GoogleCloudApigeeV1OptimizedStatsNode2Dict(TypedDict):
    data: NotRequired[list[Any]]
