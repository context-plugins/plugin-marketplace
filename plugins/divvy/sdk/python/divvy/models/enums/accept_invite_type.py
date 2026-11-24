from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AcceptInviteType(str, Enum):
    """Enum for different types of organizations in BILL network."""

    VENDOR = "VENDOR"
    CUSTOMER = "CUSTOMER"

    __str__ = str.__str__


AcceptInviteTypeOrStr: TypeAlias = Annotated[AcceptInviteType | str, open_enum_validator(AcceptInviteType)]
