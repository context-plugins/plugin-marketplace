from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DeliverdDevCollectionsApi(str, Enum):
    PENDING = "pending"
    SUBMITTED = "submitted"

    __str__ = str.__str__


Status1DeliverdDevCollectionsApiOrStr: TypeAlias = Annotated[
    Status1DeliverdDevCollectionsApi | str, open_enum_validator(Status1DeliverdDevCollectionsApi)
]
