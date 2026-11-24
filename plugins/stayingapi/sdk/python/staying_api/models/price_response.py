from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .any_data1 import AnyData1, AnyData1Dict
from .meta import Meta, MetaDict


class PriceResponse(SdkBaseModel):
    data: AnyData1
    """Endpoint-specific data payload."""

    meta: Meta
    """Canonical response metadata present on every 200 (§6.3.3)."""


class PriceResponseDict(TypedDict):
    data: AnyData1Dict
    meta: MetaDict
