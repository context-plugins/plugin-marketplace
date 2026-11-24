from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UsageItem(SdkBaseModel):
    """Usage item for a single operation."""

    name: str
    """Name of the SKU."""

    count: int
    """Count of the SKU."""


class UsageItemDict(TypedDict):
    name: str
    count: int
