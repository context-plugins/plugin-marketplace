from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .source_location import SourceLocation, SourceLocationDict


class SourceHolder(SdkBaseModel):
    """Publisher information for the selected story image."""

    domain: OptionalNullable[str] = UNSET
    """Publisher domain."""

    paywall: OptionalNullable[bool] = UNSET
    """Whether the publisher uses a paywall, when known."""

    location: Optional[SourceLocation] = UNSET


class SourceHolderDict(TypedDict):
    domain: NotRequired[str | None]
    paywall: NotRequired[bool | None]
    location: NotRequired[SourceLocationDict]
