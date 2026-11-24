from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrganizationAccountTypeResponse(str, Enum):
    """Organization Account Type."""

    BUSINESS = "BUSINESS"
    CONTRACTOR = "CONTRACTOR"
    EMPLOYEE_OR_INDIVIDUAL = "EMPLOYEE_OR_INDIVIDUAL"
    OTHER = "OTHER"
    CONSUMER = "CONSUMER"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


OrganizationAccountTypeResponseOrStr: TypeAlias = Annotated[
    OrganizationAccountTypeResponse | str, open_enum_validator(OrganizationAccountTypeResponse)
]
