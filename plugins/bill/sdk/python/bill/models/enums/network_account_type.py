from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NetworkAccountType(str, Enum):
    """Enum for different types of accounts in BILL network."""

    ADVANCED = "ADVANCED"
    BUSINESS = "BUSINESS"
    RPPS = "RPPS"
    CONTRACTOR = "CONTRACTOR"
    EMPLOYEE_OR_INDIVIDUAL = "EMPLOYEE_OR_INDIVIDUAL"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


NetworkAccountTypeOrStr: TypeAlias = Annotated[NetworkAccountType | str, open_enum_validator(NetworkAccountType)]
