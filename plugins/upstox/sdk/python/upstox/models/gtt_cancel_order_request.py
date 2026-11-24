from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GttCancelOrderRequest(SdkBaseModel):
    gtt_order_id: str
    """Unique identifier of the GTT order to be cancelled"""


class GttCancelOrderRequestDict(TypedDict):
    gtt_order_id: str
