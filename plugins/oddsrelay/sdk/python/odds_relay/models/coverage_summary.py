from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CoverageSummary(SdkBaseModel):
    """The keyless view."""

    region: str
    generated_at: str
    products: dict[str, Any]
    markets: dict[str, Any]
    """Per product the region serves, the market keys it carries, sorted: each one a value that product's ``markets``
    filter takes while this document is current (2up, each-way, extra-place and bog carry one each). A key under one
    product and not another is 400 ``unknown_market`` on the other's route when that route does not know it, naming the
    products that carry it in ``products``."""


class CoverageSummaryDict(TypedDict):
    region: str
    generated_at: str
    products: dict[str, Any]
    markets: dict[str, Any]
