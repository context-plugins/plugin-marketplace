from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SeverityDoiTSupportRequestsApi(str, Enum):
    """Ticket severity."""

    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"
    URGENT = "urgent"

    __str__ = str.__str__


SeverityDoiTSupportRequestsApiOrStr: TypeAlias = Annotated[
    SeverityDoiTSupportRequestsApi | str, open_enum_validator(SeverityDoiTSupportRequestsApi)
]
