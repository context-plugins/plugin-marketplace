from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DidlogicComNumbersInventoryApi(str, Enum):
    """Number status"""

    ACTIVE = "active"
    PENDING_DOCS = "pending_docs"

    __str__ = str.__str__


Status1DidlogicComNumbersInventoryApiOrStr: TypeAlias = Annotated[
    Status1DidlogicComNumbersInventoryApi | str, open_enum_validator(Status1DidlogicComNumbersInventoryApi)
]
