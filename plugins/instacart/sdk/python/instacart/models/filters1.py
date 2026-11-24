from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Filters1(SdkBaseModel):
    """Filters to narrow product matching for this ingredient."""

    department: Optional[str] = UNSET
    """The store department to filter products by."""


class Filters1Dict(TypedDict):
    department: NotRequired[str]
