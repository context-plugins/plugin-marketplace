from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BulkSubscriptionUpdatesGetResponseDataType(str, Enum):
    """The type of update (status or bulk)"""

    BULK = "bulk"
    STATUS = "status"

    __str__ = str.__str__


BulkSubscriptionUpdatesGetResponseDataTypeOrStr: TypeAlias = Annotated[
    BulkSubscriptionUpdatesGetResponseDataType | str, open_enum_validator(BulkSubscriptionUpdatesGetResponseDataType)
]
