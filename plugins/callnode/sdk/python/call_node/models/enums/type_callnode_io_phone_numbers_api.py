from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeCallnodeIoPhoneNumbersApi(str, Enum):
    BASIC = "basic"
    BEARER = "bearer"
    HEADER = "header"

    __str__ = str.__str__


TypeCallnodeIoPhoneNumbersApiOrStr: TypeAlias = Annotated[
    TypeCallnodeIoPhoneNumbersApi | str, open_enum_validator(TypeCallnodeIoPhoneNumbersApi)
]
