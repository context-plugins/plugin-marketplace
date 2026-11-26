from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CardAccountStatus(str, Enum):
    """Card Account response status."""

    NOT_VERIFIED = "NOT_VERIFIED"
    VERIFIED = "VERIFIED"
    PENDING = "PENDING"
    BLOCKED = "BLOCKED"
    EXPIRED = "EXPIRED"
    INVALID = "INVALID"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


CardAccountStatusOrStr: TypeAlias = Annotated[CardAccountStatus | str, open_enum_validator(CardAccountStatus)]
