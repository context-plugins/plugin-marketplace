from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .queue_item import QueueItem, QueueItemDict


class ODataQueueItemCollection(SdkBaseModel):
    """OData collection response containing queue items"""

    value: Optional[list[QueueItem]] = UNSET


class ODataQueueItemCollectionDict(TypedDict):
    value: NotRequired[list[QueueItemDict]]
