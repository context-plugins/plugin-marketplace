from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeliveryAddress(SdkBaseModel):
    """The delivery address for the order."""

    address_line_1: Optional[str] = UNSET
    """The street address."""

    address_line_2: Optional[str] = UNSET
    """Additional address information."""

    city: Optional[str] = UNSET
    """The city."""

    state: Optional[str] = UNSET
    """The state or province."""

    postal_code: Optional[str] = UNSET
    """The postal or ZIP code."""


class DeliveryAddressDict(TypedDict):
    address_line_1: NotRequired[str]
    address_line_2: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    postal_code: NotRequired[str]
