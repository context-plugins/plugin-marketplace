from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrganizationUserRoleType(str, Enum):
    """Enumeration of organization user roles."""

    ADMINISTRATOR = "ADMINISTRATOR"
    CLERK = "CLERK"
    APPROVER = "APPROVER"
    ACCOUNTANT = "ACCOUNTANT"
    CUSTOM = "CUSTOM"
    PAYER = "PAYER"
    PARTNER = "PARTNER"
    AUDITOR = "AUDITOR"
    NO_ACCESS = "NO_ACCESS"
    MEMBER = "MEMBER"
    MEMBER_PLUS = "MEMBER_PLUS"
    INTERNAL = "INTERNAL"
    PURCHASE_REQUESTER = "PURCHASE_REQUESTER"
    CONSOLE_CUSTOM = "CONSOLE_CUSTOM"
    RECEIVER = "RECEIVER"
    PROCUREMENT_USER = "PROCUREMENT_USER"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


OrganizationUserRoleTypeOrStr: TypeAlias = Annotated[
    OrganizationUserRoleType | str, open_enum_validator(OrganizationUserRoleType)
]
