from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevCollectionsApi(str, Enum):
    PENDING = "pending"
    COMPLETE = "complete"
    EXPIRED = "expired"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusDeliverdDevCollectionsApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevCollectionsApi | str, open_enum_validator(StatusDeliverdDevCollectionsApi)
]
