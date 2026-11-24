from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MediaUrlConfig(SdkBaseModel):
    """Configuration for media_url expiration."""

    expire_in: OptionalNullable[int] = UNSET
    """Optional expiration time in seconds (1h-24h). Defaults to 12h if not specified."""


class MediaUrlConfigDict(TypedDict):
    expire_in: NotRequired[int | None]
