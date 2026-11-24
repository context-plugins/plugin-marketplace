from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTServiceQuotasApi(str, Enum):
    """Normalized utilization status. Warning begins at 80 percent; exceeded begins at 100 percent."""

    OK = "ok"
    WARNING = "warning"
    EXCEEDED = "exceeded"

    __str__ = str.__str__


StatusDoiTServiceQuotasApiOrStr: TypeAlias = Annotated[
    StatusDoiTServiceQuotasApi | str, open_enum_validator(StatusDoiTServiceQuotasApi)
]
