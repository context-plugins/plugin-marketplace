from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AllocationDoiTAnomaliesApi(SdkBaseModel):
    id: str
    """Allocation ID. Use it with the Allocations API to read the allocation."""

    name: str
    """Allocation name."""


class AllocationDoiTAnomaliesApiDict(TypedDict):
    id: str
    name: str
