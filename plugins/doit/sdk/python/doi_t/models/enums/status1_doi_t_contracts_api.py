from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DoiTContractsApi(str, Enum):
    """The contract status."""

    DRAFT = "draft"
    SCHEDULED = "scheduled"
    ACTIVE = "active"
    CANCELLED = "cancelled"
    EXPIRED = "expired"
    SUPERSEDED = "superseded"

    __str__ = str.__str__


Status1DoiTContractsApiOrStr: TypeAlias = Annotated[
    Status1DoiTContractsApi | str, open_enum_validator(Status1DoiTContractsApi)
]
