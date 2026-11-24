from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BulkSubscriptionUpdatesGetResponseDataStatus(str, Enum):
    """The status of the update"""

    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETE = "complete"
    FAILED = "failed"

    __str__ = str.__str__


BulkSubscriptionUpdatesGetResponseDataStatusOrStr: TypeAlias = Annotated[
    BulkSubscriptionUpdatesGetResponseDataStatus | str,
    open_enum_validator(BulkSubscriptionUpdatesGetResponseDataStatus),
]
