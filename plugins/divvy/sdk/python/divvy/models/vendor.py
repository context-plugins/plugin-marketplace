from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Vendor(SdkBaseModel):
    """Vendor information."""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET


class VendorDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
