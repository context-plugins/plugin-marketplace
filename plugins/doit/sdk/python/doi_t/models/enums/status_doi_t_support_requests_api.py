from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTSupportRequestsApi(str, Enum):
    """The status to set on the request."""

    OPEN = "open"
    PENDING = "pending"
    HOLD = "hold"
    SOLVED = "solved"

    __str__ = str.__str__


StatusDoiTSupportRequestsApiOrStr: TypeAlias = Annotated[
    StatusDoiTSupportRequestsApi | str, open_enum_validator(StatusDoiTSupportRequestsApi)
]
