from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerAccountTypeRequest(str, Enum):
    """CustomerAccountType."""

    NONE = "NONE"
    BUSINESS = "BUSINESS"
    PERSON = "PERSON"

    __str__ = str.__str__


CustomerAccountTypeRequestOrStr: TypeAlias = Annotated[
    CustomerAccountTypeRequest | str, open_enum_validator(CustomerAccountTypeRequest)
]
