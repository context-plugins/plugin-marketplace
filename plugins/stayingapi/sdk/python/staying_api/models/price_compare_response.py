from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .any_data2 import AnyData2, AnyData2Dict
from .meta import Meta, MetaDict


class PriceCompareResponse(SdkBaseModel):
    data: AnyData2
    """Endpoint-specific data payload."""

    meta: Meta
    """Canonical response metadata present on every 200 (§6.3.3)."""


class PriceCompareResponseDict(TypedDict):
    data: AnyData2Dict
    meta: MetaDict
