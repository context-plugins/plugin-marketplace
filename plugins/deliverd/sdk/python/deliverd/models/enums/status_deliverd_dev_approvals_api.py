from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevApprovalsApi(str, Enum):
    OK = "ok"
    WARNING = "warning"
    INFO = "info"

    __str__ = str.__str__


StatusDeliverdDevApprovalsApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevApprovalsApi | str, open_enum_validator(StatusDeliverdDevApprovalsApi)
]
