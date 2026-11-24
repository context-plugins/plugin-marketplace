from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrganizationBankAccountUserStatus(str, Enum):
    """Bank account user verification status."""

    UNVERIFIED = "UNVERIFIED"
    NOMINATED = "NOMINATED"
    VERIFIED = "VERIFIED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


OrganizationBankAccountUserStatusOrStr: TypeAlias = Annotated[
    OrganizationBankAccountUserStatus | str, open_enum_validator(OrganizationBankAccountUserStatus)
]
