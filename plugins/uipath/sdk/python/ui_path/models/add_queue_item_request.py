from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .queue_item_data import QueueItemData, QueueItemDataDict


class AddQueueItemRequest(SdkBaseModel):
    """Request payload for adding a new item to a queue"""

    item_data: QueueItemData = Field(alias="itemData")
    """Data for creating a new queue item"""


class AddQueueItemRequestDict(TypedDict):
    item_data: QueueItemDataDict
