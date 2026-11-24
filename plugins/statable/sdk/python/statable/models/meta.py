from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Meta(SdkBaseModel):
    """Present only on breakdown responses."""

    total: Optional[int] = UNSET
    """Total distinct values for the window, across all pages."""

    limit: Optional[int] = UNSET
    """Effective limit after clamping."""

    offset: Optional[int] = UNSET
    has_more: Optional[bool] = UNSET
    """True when offset + returned rows < total. Page again with offset += limit."""


class MetaDict(TypedDict):
    total: NotRequired[int]
    limit: NotRequired[int]
    offset: NotRequired[int]
    has_more: NotRequired[bool]
