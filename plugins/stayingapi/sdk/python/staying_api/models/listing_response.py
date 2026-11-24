from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .any_data import AnyData, AnyDataDict
from .meta import Meta, MetaDict


class ListingResponse(SdkBaseModel):
    data: AnyData
    """Endpoint-specific data payload."""

    meta: Meta
    """Canonical response metadata present on every 200 (§6.3.3)."""


class ListingResponseDict(TypedDict):
    data: AnyDataDict
    meta: MetaDict
