from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AccountTypeRequest(str, Enum):
    """AccountRequestType."""

    NONE = "NONE"
    BUSINESS = "BUSINESS"
    PERSON = "PERSON"

    __str__ = str.__str__


AccountTypeRequestOrStr: TypeAlias = Annotated[AccountTypeRequest | str, open_enum_validator(AccountTypeRequest)]
