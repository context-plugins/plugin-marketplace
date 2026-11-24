from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventData(SdkBaseModel):
    id: Optional[str] = UNSET
    subscriber_id: Optional[str] = UNSET
    shop_id: Optional[str] = UNSET
    is_opt_out: bool = True
    shopify_customer_id: Optional[Any] = UNSET
    from_number: Optional[str] = UNSET
    created_at: Optional[str] = UNSET
    body: Optional[str] = UNSET


class EventDataDict(TypedDict):
    id: NotRequired[str]
    subscriber_id: NotRequired[str]
    shop_id: NotRequired[str]
    is_opt_out: NotRequired[bool]
    shopify_customer_id: NotRequired[Any]
    from_number: NotRequired[str]
    created_at: NotRequired[str]
    body: NotRequired[str]
