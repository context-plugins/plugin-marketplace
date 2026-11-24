from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .meta import Meta, MetaDict
from .property import Property, PropertyDict


class SearchResponse(SdkBaseModel):
    data: list[Property]
    """Endpoint-specific data payload."""

    meta: Meta
    """Canonical response metadata present on every 200 (§6.3.3)."""


class SearchResponseDict(TypedDict):
    data: list[PropertyDict]
    meta: MetaDict
