from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BulkSubscriptionUpdatesListResponseDataItemType(str, Enum):
    """The type of update (status or bulk)"""

    STATUS = "status"
    BULK = "bulk"

    __str__ = str.__str__


BulkSubscriptionUpdatesListResponseDataItemTypeOrStr: TypeAlias = Annotated[
    BulkSubscriptionUpdatesListResponseDataItemType | str,
    open_enum_validator(BulkSubscriptionUpdatesListResponseDataItemType),
]
