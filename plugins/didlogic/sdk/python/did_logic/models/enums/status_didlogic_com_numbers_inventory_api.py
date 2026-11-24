from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDidlogicComNumbersInventoryApi(str, Enum):
    """Current status of the number"""

    ACTIVE = "active"
    PENDING_DOCS = "pending_docs"

    __str__ = str.__str__


StatusDidlogicComNumbersInventoryApiOrStr: TypeAlias = Annotated[
    StatusDidlogicComNumbersInventoryApi | str, open_enum_validator(StatusDidlogicComNumbersInventoryApi)
]
