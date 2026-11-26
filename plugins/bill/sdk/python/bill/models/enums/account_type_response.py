from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AccountTypeResponse(str, Enum):
    """AccountType."""

    NONE = "NONE"
    BUSINESS = "BUSINESS"
    PERSON = "PERSON"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


AccountTypeResponseOrStr: TypeAlias = Annotated[AccountTypeResponse | str, open_enum_validator(AccountTypeResponse)]
