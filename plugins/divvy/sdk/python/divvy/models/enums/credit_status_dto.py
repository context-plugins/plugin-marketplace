from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreditStatusDto(str, Enum):
    """Credit Status DTO."""

    FULLY_APPLIED = "FULLY_APPLIED"
    NOT_APPLIED = "NOT_APPLIED"
    PARTIALLY_APPLIED = "PARTIALLY_APPLIED"
    IN_PROCESS = "IN_PROCESS"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


CreditStatusDtoOrStr: TypeAlias = Annotated[CreditStatusDto | str, open_enum_validator(CreditStatusDto)]
