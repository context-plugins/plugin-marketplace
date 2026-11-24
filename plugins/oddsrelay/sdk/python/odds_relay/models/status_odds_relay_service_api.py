from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.products import ProductsOrStr


class StatusOddsRelayServiceApi(SdkBaseModel):
    region: str
    generated_at: str
    """ISO-8601 UTC, whole seconds."""

    products: dict[str, ProductsOrStr]
    """The products served in the region, in canonical order."""


class StatusOddsRelayServiceApiDict(TypedDict):
    region: str
    generated_at: str
    products: dict[str, ProductsOrStr]
