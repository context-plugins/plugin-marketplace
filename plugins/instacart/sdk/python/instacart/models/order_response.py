from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.fulfillment_type1 import FulfillmentType1OrStr
from .enums.status import StatusOrStr
from .order_item import OrderItem, OrderItemDict
from .service_option import ServiceOption, ServiceOptionDict
from .store import Store, StoreDict


class OrderResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    """The unique identifier for the order."""

    status: Optional[StatusOrStr] = UNSET
    """The current status of the order."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the order was created."""

    fulfillment_type: Optional[FulfillmentType1OrStr] = UNSET
    """The fulfillment type of the order."""

    service_option: Optional[ServiceOption] = UNSET
    store: Optional[Store] = UNSET
    items: Optional[list[OrderItem]] = UNSET
    """The items included in the order."""


class OrderResponseDict(TypedDict):
    id: NotRequired[str]
    status: NotRequired[StatusOrStr]
    created_at: NotRequired[RFC3339DateTime]
    fulfillment_type: NotRequired[FulfillmentType1OrStr]
    service_option: NotRequired[ServiceOptionDict]
    store: NotRequired[StoreDict]
    items: NotRequired[list[OrderItemDict]]
