from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .address import Address, AddressDict
from .coordinates import Coordinates, CoordinatesDict
from .enums.status_instacart_connect_post_checkout_orders_api import StatusInstacartConnectPostCheckoutOrdersApiOrStr
from .shopper import Shopper, ShopperDict


class OrderHandlingResponse(SdkBaseModel):
    order_id: Optional[str] = UNSET
    """The unique identifier for the order."""

    status: Optional[StatusInstacartConnectPostCheckoutOrdersApiOrStr] = UNSET
    """The current status of the order."""

    address: Optional[Address] = UNSET
    """The delivery or pickup address."""

    coordinates: Optional[Coordinates] = UNSET
    """The geographic coordinates of the delivery or pickup address."""

    shopper: Optional[Shopper] = UNSET
    """Information about the current shopper assigned to the order."""

    notes: Optional[str] = UNSET
    """Any delivery or pickup instructions included with the order."""


class OrderHandlingResponseDict(TypedDict):
    order_id: NotRequired[str]
    status: NotRequired[StatusInstacartConnectPostCheckoutOrdersApiOrStr]
    address: NotRequired[AddressDict]
    coordinates: NotRequired[CoordinatesDict]
    shopper: NotRequired[ShopperDict]
    notes: NotRequired[str]
