from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CachingConfig(SdkBaseModel):
    ttl: int
    """The TTL in seconds for a resolver that has caching activated. Valid values are 1–3,600 seconds."""

    caching_keys: Optional[list[str]] = Field(default=UNSET, alias="cachingKeys")
    """The caching keys for a resolver that has caching activated. Valid values are entries from the $context.arguments,
    $context.source, and $context.identity maps."""


class CachingConfigDict(TypedDict):
    ttl: int
    caching_keys: NotRequired[list[str]]
