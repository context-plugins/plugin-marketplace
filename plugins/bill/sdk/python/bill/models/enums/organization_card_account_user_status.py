from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrganizationCardAccountUserStatus(str, Enum):
    """Card account user verification status."""

    UNVERIFIED = "UNVERIFIED"
    NOMINATED = "NOMINATED"
    VERIFIED = "VERIFIED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


OrganizationCardAccountUserStatusOrStr: TypeAlias = Annotated[
    OrganizationCardAccountUserStatus | str, open_enum_validator(OrganizationCardAccountUserStatus)
]
