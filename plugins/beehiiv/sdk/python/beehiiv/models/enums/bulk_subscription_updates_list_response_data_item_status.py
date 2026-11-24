from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BulkSubscriptionUpdatesListResponseDataItemStatus(str, Enum):
    """The status of the update"""

    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETE = "complete"
    FAILED = "failed"

    __str__ = str.__str__


BulkSubscriptionUpdatesListResponseDataItemStatusOrStr: TypeAlias = Annotated[
    BulkSubscriptionUpdatesListResponseDataItemStatus | str,
    open_enum_validator(BulkSubscriptionUpdatesListResponseDataItemStatus),
]
