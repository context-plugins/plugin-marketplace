from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ShippingAddressResponse(SdkBaseModel):
    city: str | None
    """Name of city, municipality, or village."""

    address: str | None
    """Building name, apartment number."""

    zip: str | None
    """Postal code."""


class ShippingAddressResponseDict(TypedDict):
    city: str | None
    address: str | None
    zip: str | None
