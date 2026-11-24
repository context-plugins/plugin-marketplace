from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ShippingAddress(SdkBaseModel):
    city: str
    """Name of city, municipality, or village."""

    address: str
    """Building name, apartment number."""

    zip: str
    """Postal code."""


class ShippingAddressDict(TypedDict):
    city: str
    address: str
    zip: str
