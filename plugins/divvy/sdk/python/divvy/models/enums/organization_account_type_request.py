from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrganizationAccountTypeRequest(str, Enum):
    """Organization Account Type."""

    BUSINESS = "BUSINESS"
    CONTRACTOR = "CONTRACTOR"
    EMPLOYEE_OR_INDIVIDUAL = "EMPLOYEE_OR_INDIVIDUAL"
    OTHER = "OTHER"
    CONSUMER = "CONSUMER"

    __str__ = str.__str__


OrganizationAccountTypeRequestOrStr: TypeAlias = Annotated[
    OrganizationAccountTypeRequest | str, open_enum_validator(OrganizationAccountTypeRequest)
]
