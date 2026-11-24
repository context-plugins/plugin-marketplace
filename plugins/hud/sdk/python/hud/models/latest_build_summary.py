from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LatestBuildSummary(SdkBaseModel):
    """Projection of ``builds`` returned alongside a registry."""

    id: UUID
    status: str
    sdk_generation: str
    version: Optional[int] = UNSET
    manifest: Optional[Any] = UNSET
    lock: Optional[Any] = UNSET


class LatestBuildSummaryDict(TypedDict):
    id: UUID
    status: str
    sdk_generation: str
    version: NotRequired[int]
    manifest: NotRequired[Any]
    lock: NotRequired[Any]
