from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .brand_kit import BrandKit, BrandKitDict


class BrandKitList(SdkBaseModel):
    """A paginated list of Brand Kits."""

    data: Optional[list[BrandKit]] = UNSET
    """Array of Brand Kit objects."""

    total: Optional[int] = UNSET
    """Total count of Brand Kits in the organization."""


class BrandKitListDict(TypedDict):
    data: NotRequired[list[BrandKitDict]]
    total: NotRequired[int]
