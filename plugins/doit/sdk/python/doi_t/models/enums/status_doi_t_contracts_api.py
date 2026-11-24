from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTContractsApi(str, Enum):
    """The contract status after the operation (``active``, ``scheduled``, or ``cancelled``)."""

    ACTIVE = "active"
    SCHEDULED = "scheduled"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusDoiTContractsApiOrStr: TypeAlias = Annotated[
    StatusDoiTContractsApi | str, open_enum_validator(StatusDoiTContractsApi)
]
