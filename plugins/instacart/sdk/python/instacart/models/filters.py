from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Filters(SdkBaseModel):
    """Filters to narrow product matching."""

    department: Optional[str] = UNSET
    """The store department to filter products by."""


class FiltersDict(TypedDict):
    department: NotRequired[str]
