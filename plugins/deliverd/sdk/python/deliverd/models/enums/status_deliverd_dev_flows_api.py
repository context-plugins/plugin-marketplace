from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevFlowsApi(str, Enum):
    OPEN = "open"
    COMPLETE = "complete"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusDeliverdDevFlowsApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevFlowsApi | str, open_enum_validator(StatusDeliverdDevFlowsApi)
]
