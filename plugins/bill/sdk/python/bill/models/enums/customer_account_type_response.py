from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerAccountTypeResponse(str, Enum):
    """CustomerAccountType."""

    NONE = "NONE"
    BUSINESS = "BUSINESS"
    PERSON = "PERSON"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


CustomerAccountTypeResponseOrStr: TypeAlias = Annotated[
    CustomerAccountTypeResponse | str, open_enum_validator(CustomerAccountTypeResponse)
]
